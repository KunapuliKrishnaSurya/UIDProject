// Get DOM elements
const profilePicture = document.getElementById('profilePicture');
const profilePictureInput = document.getElementById('profilePictureInput');
const usernameElement = document.getElementById('username');
const followersCount = document.getElementById('followersCount');
const followingCount = document.getElementById('followingCount');
const editProfileBtn = document.getElementById('editProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const profilePostsContainer = document.querySelector('.profile-posts');

// Edit Profile Button Click Event
editProfileBtn.addEventListener('click', enableProfileEditing);

// Save Profile Button Click Event
saveProfileBtn.addEventListener('click', saveProfile);

// Enable Profile Editing
function enableProfileEditing() {
  editProfileBtn.classList.add('hidden');
  saveProfileBtn.classList.remove('hidden');
  
  // Enable editing of profile information
  usernameElement.contentEditable = true;
  profilePictureInput.disabled = false;
}

// Save Profile
function saveProfile() {
  const newUsername = usernameElement.innerText;
  // Update the user's username in the backend
  
  // Update the profile picture if a new picture is selected
  const newProfilePicture = profilePictureInput.files[0];
  if (newProfilePicture) {
    // Upload the new profile picture to the backend and update the profile picture URL
  }

  // Disable profile editing
  editProfileBtn.classList.remove('hidden');
  saveProfileBtn.classList.add('hidden');
  usernameElement.contentEditable = false;
  profilePictureInput.disabled = true;
}

// Function to retrieve user data and populate the profile page
function loadUserProfile() {
  // Fetch user data from the backend
  
  // Populate the profile page with user data
  profilePicture.src = 'path/to/profile-picture.jpg';
  usernameElement.innerText = 'John Doe';
  followersCount.innerText = 'Followers: 100';
  followingCount.innerText = 'Following: 150';
  
  // Retrieve and display user posts
  const userPosts = ['post1.jpg', 'post2.jpg', 'post3.jpg'];

  userPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const postImage = document.createElement('img');
    postImage.src = `path/to/posts/${post}`;
    postElement.appendChild(postImage);
    
    profilePostsContainer.appendChild(postElement);
  });
}

// Call the function to load the user profile
loadUserProfile();
