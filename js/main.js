const milestones = JSON.parse(data);

function loadMilestone(milestones) {
    console.log(milestones)
  const milestonesContainer = document.querySelector(".milestones");

  milestones.data.map((milestone) => {
    const milestoneContainer = document.createElement("div");
    milestoneContainer.className = "milestone border-b";
    milestoneContainer.innerHTML = `
        <div class="flex">
        <div class="checkbox"><input type="checkbox" /></div>
        <div>
          <p>
            ${
                milestone.name
            }
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        <div class="module border-b">
          <p>Module Name</p>
        </div>
      </div>
        `;

    milestonesContainer.appendChild(milestoneContainer);
  });
}

loadMilestone(milestones);
