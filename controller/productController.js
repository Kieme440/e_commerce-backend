export async function getAllProducts(){
    try {
        const product = Products.find();
        res.status(200).json(Products);
    } catch (error) {
        
    }
};

export async function updateProducts(req, res){
    res.status(201).send("Products updated successfully");
};

export async function createNewProduct(req, res){
    res.status(200).send("Products created successfully");
};

export async function deleteProducts(req, res){
    res.status(200).send("Products deleted successfully");
};

