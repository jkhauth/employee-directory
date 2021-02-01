import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=dob,picture,email,name,phone&?page=3&results=10&seed=abc";

// Export an object with a "search" method that searches the Giphy API for the passed query