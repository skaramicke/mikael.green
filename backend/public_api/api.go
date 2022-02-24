package public_api

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Api struct {
	Router *mux.Router
}

func Init() error {
	api := Api{}
	api.Router = mux.NewRouter()

	api.RegisterRoutes()
	return api.Serve()
}

func (api *Api) RegisterRoutes() {
	api.Router.HandleFunc("/api/hello", HelloWorldHandler)

	// Frontend assets
	api.Router.HandleFunc(`/assets/{file:[a-zA-Z0-9=\-\/]+}`, FrontendHandler).Methods("GET")

	// Everything else serves the frontend
	api.Router.PathPrefix("").HandlerFunc(FrontendHandler).Methods("GET")

}

func (api *Api) Serve() error {
	server := http.Server{
		Addr:    ":8080",
		Handler: api.Router,
	}
	return server.ListenAndServe()
}
