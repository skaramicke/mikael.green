package main

import (
	"mikaelgreen/public_api"

	log "github.com/sirupsen/logrus"
)

func main() {

	// Start web server
	log.Fatal(public_api.Init())
}
