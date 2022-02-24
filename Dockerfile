FROM golang:alpine AS builder
RUN apk update && apk add --no-cache git
WORKDIR $GOPATH/src/mikaelgreen
COPY backend .
RUN go get -d -v

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -ldflags="-w -s" -o /go/bin/mikaelgreen

FROM node:17.3-alpine AS uibuilder
WORKDIR /ui
COPY ui /ui
RUN yarn
RUN yarn build

FROM scratch

COPY --from=builder /go/bin/mikaelgreen /mikaelgreen
COPY --from=uibuilder ui/public /static-frontend

ENTRYPOINT [ "/mikaelgreen" ]