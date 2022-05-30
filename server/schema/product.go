package schema

type ProductInfo struct {
	ID               int    `json:"id"`
	Name             string `json:"name"`
	Price            int    `json:"price"`
	ShortDescription string `json:"short_desc"`
}

type ProductDetail struct {
	ID              int    `json:"id"`
	Name            string `json:"name"`
	Price           int    `json:"price"`
	LongDescription string `json:"short_desc"`
}
