package router

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/ARF-DEV/Tubes-PAM/server/repository"
)

func getProducts(productRepo repository.ProductRepoInterface) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		products, err := productRepo.FetchProduct()

		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(fmt.Sprintf("Error : %s", err.Error())))
			return
		}

		body, err := json.Marshal(products)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(fmt.Sprintf("Error : %s", err.Error())))
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(body)
		return
	})
}

func getProductByID(productRepo repository.ProductRepoInterface) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		id := r.URL.Query().Get("id")
		idInt, err := strconv.Atoi(id)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		product, err := productRepo.GetByID(idInt)

		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}

		body, err := json.Marshal(product)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(body)
		return
	})
}

func GenerateMux(productRepo repository.ProductRepoInterface) *http.ServeMux {
	mux := http.NewServeMux()

	mux.Handle("/products", getProducts(productRepo))

	mux.Handle("/product", getProductByID(productRepo))

	return mux
}
