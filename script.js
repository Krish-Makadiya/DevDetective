// https://api.github.com/users/{username}

const input_username = document.querySelector(".search-username");
const search_btn = document.querySelector(".search-btn");
const real_name = document.querySelector(".name");
const user_name = document.querySelector(".user");
const user_joined = document.querySelector(".joined-date");
const user_bio = document.querySelector(".user-bio-section");
const user_repos = document.querySelector(".repo");
const user_followers = document.querySelector(".followers");
const user_following = document.querySelector(".following");
const user_location = document.querySelector(".location");
const user_twitter = document.querySelector(".twitter");
const user_img = document.querySelector(".user-img");
const temp_container = document.querySelector(".temp-container");
const dark_light_mode = document.querySelector(".dark-light-mode");
const root = document.querySelector(":root");
const mode = document.querySelector(".mode");
const mode_img = document.querySelector(".mode-img");

const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let dark = false;

convertDark();

dark_light_mode.addEventListener('click', ()=>{
    if(dark == false){
        convertDark();
    }
    else{
        convertLight();
    }
})

function convertDark(){
    root.style.setProperty("--bg-color", "#141d2f");
    root.style.setProperty("--card-color", "#1e2a47");
    root.style.setProperty("--color", "#fff");
    root.style.setProperty("--bg-shadow", "0px 16px 30px -10px rgba(70, 96, 187, 0.15)");
    mode.innerText = "LIGHT"
    mode_img.src = "assets/sun.svg"
    dark = true;
}

function convertLight(){
    root.style.setProperty("--bg-color", "#f6f8ff");
    root.style.setProperty("--card-color", "#fefefe");
    root.style.setProperty("--color", "#141d2f");
    root.style.setProperty("--bg-shadow", "0px 16px 30px -10px rgba(0, 0, 0, 0.15)");
    mode.innerText = "DARK"
    dark = false;
    mode_img.src = "assets/moon.svg"
}

search_btn.addEventListener('click', () => {
    let username = input_username.value;
    if (username == "") {
        
    } 
    else {
        getUserInfo(username);
    }
});

input_username.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        let username = input_username.value;
        if (username == "") {
           
        } 
        else {
            getUserInfo(username);
        }
    }
});

async function getUserInfo(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let result = await response.json();
        updateUserDetails(result);
    } 
    catch (error) {
        console.log('API not Working');
    }
}

function updateUserDetails(data) {
    temp_container.classList.add("active");
    user_img.src = data?.avatar_url;
    
    real_name.innerText = data?.name;
    user_name.innerText = data?.login;
    user_name.href = data?.html_url;

    let day = data?.created_at[8] + data?.created_at[9];
    let month = data?.created_at[5] + data?.created_at[6];
    let year =
        data?.created_at[0] +
        data?.created_at[1] +
        data?.created_at[2] +
        data?.created_at[3];
    user_joined.innerText = `Joined ${day} ${monthes[month - 1]} ${year}`;

    user_bio.innerText = data?.bio;
    user_repos.innerText = data?.public_repos;
    user_followers.innerText = data?.followers;
    user_following.innerText = data?.following;

    user_location.innerText = data?.location;
    let twitter_username = data?.twitter_username;
    if (twitter_username == null) {
        user_twitter.innerText = "not available";
    } 
    else {
        user_twitter.href = `https://x.com/${twitter_username}`;
        user_twitter.innerText = twitter_username;
    }
}
