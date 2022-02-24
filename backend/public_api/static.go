package public_api

import (
	"mikaelgreen/util"
	"net/http"
	"net/http/httputil"
	"net/url"

	log "github.com/sirupsen/logrus"
)

func FrontendHandler(w http.ResponseWriter, r *http.Request) {

	mode := util.Getenv("INDEX_HANDLER_MODE", "static") // proxy or static

	if mode == "proxy" {

		log.Info("Serving frontend using proxy for Protocol: " + r.Proto + " Host: " + r.Host + " Path: " + r.URL.Path)
		// Proxy to the development service (e.g. webpack-dev-server) running in the cluster
		u, err := url.Parse(util.Getenv("INDEX_HANDLER_SERVER", "http://frontend:8080"))
		if err != nil {
			log.Error(err.Error())
			return
		}

		proxy := httputil.NewSingleHostReverseProxy(u)

		proxy.ServeHTTP(w, r)

	} else {
		log.Info("Serving frontend using static files")
		http.FileServer(http.Dir("/static-frontend")).ServeHTTP(w, r)
	}
}
