export const fetchProducts = () => (
  $.ajax({
    method: 'get',
    url: 'api/products'
  })
);

export const fetchProduct = (id) => (
  $.ajax({
    method: 'get',
    url: `api/products/${id}`
  })
);

export const createProduct = (product) => {
  return $.ajax({
    method: 'post',
    url: `api/products`,
    data: product,
    contentType: false,
    processData: false,
  })
};

export const updateProduct = (product) => {
  return (
  $.ajax({
    method: 'patch',
    url: `api/products/${product.id}`,
    data: {product}
  })
)};

export const deleteProduct = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/products/${id}`
  })
);
