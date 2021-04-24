type Product = 'cat' | 'dog';

const catProduct: Product = 'cat';
const dogProduct: Product = 'dog';

type NewProduct = Capitalize<Product>;

const catNewProduct: NewProduct = 'Cat';
const dogNewProduct: NewProduct = 'Dog';