// Get course name from URL
const params = new URLSearchParams(window.location.search);

const course = params.get("course");

// Show course name in input field
if(course){
    document.getElementById("course").value = course;
}else{
    document.getElementById("course").value = "No Course Selected";
}