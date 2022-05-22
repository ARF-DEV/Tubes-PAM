package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/ARF-DEV/Tubes-PAM/server/repository"
	"github.com/ARF-DEV/Tubes-PAM/server/router"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./database.db")

	if err != nil {
		panic(err)
	}
	defer db.Close()
	initDB(db)

	repo := repository.NewProductRepo(db)

	mux := router.GenerateMux(repo)

	log.Println("Server run on port 8000")
	http.ListenAndServe("localhost:8000", mux)

}

func initDB(db *sql.DB) {
	_, err := db.Exec(`CREATE TABLE IF NOT EXISTS products (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		desc TEXT NOT NULL,
		price INTEGER NOT NULL
	);`)

	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`INSERT INTO products (name, desc, price) VALUES 
	('Ayam Geprek Mang Gibran', 'mantan pembuat komik', 10000),
	('Pempek om Della', 'Encok di umur 20 tahun', 5000),
	('Wedang Jahe engkoh Eliza', 'Lahir di rumah sakit', 2000);
	`)

	if err != nil {
		panic(err)
	}
}
