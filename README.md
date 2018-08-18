# Jetsy

[Live Link](https://jetsy-app.herokuapp.com/#/)

Jetsy is an Etsy inspired shopping site that focuses on travel products. Sellers are able to upload products that they have made to sell to a user base. Jetsy uses Rails and PostgresSQL for the backend and database management and React-Redux for the front-end management.

This project was designed and worked on in a 10 day time-frame, and I will be revisiting the project to add improvements over time.

# Features
+ Secure frontend to backend user authentication using BCrypt.
+ Users can list and edit their products.
+ Products have a listing page that includes details about that listing and the seller's other listings.
+ Users can write, update, and delete reviews and ratings for a product directly on the page.
+ The search bar allows for users to search for products by name or by a word in the product's description.
+ Sellers have their own show page that lists out all of their current listings.
+ React component rendering allows for smooth transitions while navigating listings.

## Create a Listing
![create listing](https://github.com/nmatison/Jetsy/blob/master/app/assets/images/create.jpg)


## Update a Listing
![update listing](https://github.com/nmatison/Jetsy/blob/master/app/assets/images/update%20(1).jpg)


## Seller Profile Page
![seller profile page](https://github.com/nmatison/Jetsy/blob/master/app/assets/images/Seller%20Show%20Page.jpg)


## Review Form
The Review form was probably the most difficult challenged faced during the completion of this project. It had multiple components being rendered on top of one another. This challenge was solved by properly passing down props to the child components when necessary and putting in proper checks in each component to ensure that the correct props were being received by each child component.

### Creating a Review
![Review Form](https://github.com/nmatison/Jetsy/blob/master/app/assets/images/comments.jpg)


### Updating a Review
![Review Form](https://github.com/nmatison/Jetsy/blob/master/app/assets/images/productshow.jpg)


##Search Bar Parsing

Using Regex and Ajax requests on the front end, the Jetsy App is able to take an inputed string from the front end and correctly send it back to the back-end to be properly compared with the product data in the database. The back end will send back back any products whose name or product details contains the query string. This is done by taking the search query from the location string using React props.

```  
search_index:


class Greeting extends React.Component {

  handleSubmit(e) {
      e.preventDefault();
      this.props.searchProducts(this.state).then(() => this.props.history.push({
    pathname: '/search',
    search: '${this.state.query_string}',
  }))
    }


  update() {
    return (e) => {
      this.setState({["query_string"]: e.target.value})
    }
  }

search_index_items: 

class SearchIndex extends React.Component {

  componentDidMount() {
    const search = this.props.location.search.slice(1).replace(/%20/g, " ")
    this.props.searchProducts({query_string: search})
  }

  render () {
    if (!this.props.products) return null;

    const query = this.props.location.search.slice(1).replace(/%20/g, " ");
    
    if (!query.replace(/\s/g, '').length) {
      this.props.history.push("/products")
    } 
```

## Project Design

Jetsy is designed to function as close to Etsy as possible. However, given the short time-frame, it was more beneificial to focus on the implementation of the main features rather than copying every stylistic element that Etsy contains. Having a core set of major features working smoothly and bug free will be much easier to build off of in the future rather than stretching the code out to try to meet every feature while running into bugs and errors.

## Technologies

Due to the short time-frame and its connection with React-Redux, Rails was chosen for the back-end using the Ruby programing language. React Components coupled with thunk middleware and Redux issues out inputs and submits from the front end through a set of actions and ajax requests to the Rails back-end. Rails takes the data, and returns with either a successful data return or a failed error return.  Since the scale of this project is small, Heroku was deemed adequate as the means of hosting. 

The front-end is set up to handle different reducers for different responses and data objects (reviews, errors, users, products, etc) returned from Rails.

## Possible Future Additions
+ Finish the shopping cart feature (the back-end is already set-up)
+ Create categories and favorites for products.
