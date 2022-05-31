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
		price INTEGER NOT NULL,
		short_description TEXT NOT NULL,
		long_description TEXT NOT NULL
	);`)

	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`INSERT INTO products (name, price, short_description, long_description) VALUES 
	('Ayam Geprek Mang Gibran', 10000, 'Ayam', 'ini long desc Ayam Geprek Mang Gibran'),
	('Pempek om Della', 5000, 'Pempek', 'ini long desc Pempek om Della'),
	('Wedang Jahe engkoh Eliza', 2000, 'Wedang Jahe', 'ini long desc Wedang Jahe engkoh Eliza'),
	('Ayam Geprek Mang Arip', 10000, 'Ayam', 'ini long desc Ayam Geprek Mang Arip');
	`)

	if err != nil {
		panic(err)
	}
}
