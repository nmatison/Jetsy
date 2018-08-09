const fetchUser = (user) => (
  $.ajax({
    method: 'get',
    url: `api/users/${user.id}`
  });
)
