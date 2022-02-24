package public_api

import "net/http"

func HelloWorldHandler(w http.ResponseWriter, r *http.Request) {
	JSONResponse(w, http.StatusOK, "Hello World!", "Successfully executed HelloWorldHandler")
}
