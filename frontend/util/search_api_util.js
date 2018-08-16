export const searchProducts = (query) => (
  $.ajax({
    method: 'get',
    url: 'api/search',
    data: {query}
  })
)
