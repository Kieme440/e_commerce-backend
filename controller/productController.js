export function getAllProducts(req, res){
    res.status(200).send("Products listed successfully");
};

export function updateProducts(req, res){
    res.status(201).send("Products updated successfully");
};

export function createNewProduct(req, res){
    res.status(200).send("Products created successfully");
};

export function deleteProducts(req, res){
    res.status(200).send("Products deleted successfully");
};

