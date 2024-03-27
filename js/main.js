const milestones = JSON.parse(data);

function loadMilestone(milestones) {
  const milestonesContainer = document.querySelector(".milestones");
  milestonesContainer.innerHTML=`${milestones.data.map(function(milestone){
    return  `
    <div class="milestone border-b" id="${milestone._id}">
    <div class="flex" >
    <div class="checkbox" ><input type="checkbox" onclick="doneList(this, ${milestone._id})"/></div>
    <div onclick="showMilestone(this, ${milestone._id})" >
      <p>
        ${
            milestone.name
        }
        <span><i class="fas fa-chevron-down"></i></span>
      </p>
    </div>
  </div>
  <div class="hidden_panel">
    ${milestone.modules.map(function (module) {
       return `<div class="module border-b">
       <p>${module.name}</p>
     </div>`
    }).join("")}
  </div>
    </div>
      `
  }).join("")}`
};


function showMilestone(milestone,id){
  const currentPanel = milestone.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const active = document.querySelector(".active");
  if(!milestone.classList.contains(".active") && active ){
      active.classList.remove("active");
  }
  milestone.classList.toggle("active")

  if(!currentPanel.classList.contains("show") && showPanel){
    showPanel.classList.remove("show");
  }
  
  currentPanel.classList.toggle("show");
  showDetails(id);
};

function showDetails(id){
  const image = document.querySelector(".milestoneImage");
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");

  image.style.opacity = "0";

  image.src = milestones.data[id].image;
  title.innerText = milestones.data[id].name;
  details.innerText = milestones.data[id].description;
}
const image = document.querySelector(".milestoneImage");
image.onload = function() {
  this.style.opacity = "1";
};

function doneList(check, id){
  console.log(id)
  const milestoneContainer = document.querySelector(".milestones");
  const doneContainer =  document.querySelector(".doneList");
  const milestone = document.getElementById(id);
  const next = document.getElementById(id + 1);

  if(check.checked){
    milestoneContainer.removeChild(milestone);
    doneContainer.appendChild(milestone);
  }
  else{
    milestoneContainer.insertBefore(milestone, next);
    doneContainer.removeChild(milestone);
  }

}


loadMilestone(milestones);
