package main

import (
	"backend_src/server"
)

func main() {
	r := server.GetRouter()
	r.Run(":8080")
}
