<script lang="ts">
  let ativeMember = 'Anne Ngatia';

  const team = [
      {
          name: 'Anne Ngatia',
          role: 'CMO'
      },
      {
          name: 'Washington Ogol',
          role: 'CEO'
      },
      {
          name: 'Joram Kabach',
          role: 'COO'
      },

      {
          name: 'Alloys Mila',
          role: 'CTO'
      },
      {
          name: 'Kelvin Adungosi',
          role: 'Head of Data'
      },
  ];

  function imageLink(val: string) {
      return `/team-photos/${val.toLocaleLowerCase().replace(' ', '-')}.jpeg`;
  }
</script>
<div id="our-team" class="inline-container">
  <div class="heading-section">
      <div>
          <div class="title">Our Team</div>
          <h4>Meet Our Experienced Team Members</h4>
      </div>
      <div style="font-family: var(--font-family-secondary)">
          Our team members are more than just experts; they are passionate problem solvers, data enthusiasts, and
          software wizards dedicated to bringing your ideas to life. Get to know the individuals who drive our
          success, and explore the diverse skills and backgrounds they bring to the table. At Statsspeak, it's our
          team's collective expertise and unwavering commitment that make the extraordinary possible.
      </div>
  </div>
  <div class="team">
      <ul class="team-list">
          {#each team as member}
              <li class="member-list-item" class:active={member.name === ativeMember}>
                  <button on:click={() => {
                      ativeMember = member.name;
                  }}>
                      <img width="200px" class="member-image" src={imageLink(member.name)}
                           alt={member.name.toLocaleLowerCase()}
                      />
                      <span class="name-role">
                          <span class="name">{member.name}</span><br />
                          <span>——</span><br />
                          <span class="role">{member.role}</span>
                      </span>
                  </button>
              </li>
          {/each}
      </ul>
  </div>
</div>

<style>
  .heading-section {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      padding-bottom: 112px;
  }

  .title {
      font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
      color: var(--secondary-500);
      margin-bottom: 24px;
  }

  .team-list {
      display: flex;
      gap: 20px;
      align-items: center;
      font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
      list-style: none;
      width: inherit;
      min-height: 300px;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap; /* Prevents wrapping of items, adjust as needed */
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For IE11 and Edge */
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
  }

  .team-list::-webkit-scrollbar {
      display: none;
  }

  .member-list-item {
      scroll-snap-align: start;

      & button {
          display: grid;
          grid-template-rows: 1fr 32px;
          gap: 32px;
          background-color: white;
          transition: background-color 0.5s;
      }

      & .name-role {
          display: none;
          text-align: left;
          width: 100%;
          color: white;
      }

      &.active {
          & button {
              background-color: var(--primary-500);
          }

          & .name-role {
              display: block;
          }
      }
  }

  .member-image {
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
          border: 2px solid var(--primary-500);
          box-shadow: 0px 0px 5px 10px rgb(139 223 232 / 0.5);
      }
  }

  /* Media Queries */
  @media (min-width: 320px) and (max-width: 480px){

.heading-section {
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  gap: 1em;
}

.team-list {
  gap: 10px;
  min-height: 200px;
  overflow-x: auto;
  white-space: nowrap;

}

.member-list-item {
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-list-item button {
  grid-template-rows: 1fr 16px;
  gap: 16px;
}

.member-list-item .name-role {
  display: none;
}

.member-list-item  .active  .name-role {
  display: block;
}

.member-image {
  width: 50px;
  height: 50px;
}

}

@media (min-width: 481px) and (max-width: 768px){

.heading-section {
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  gap: 1em;
}

.team-list {
  gap: 10px;
  min-height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}

.member-list-item {
  scroll-snap-align: start;
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
}

.member-list-item button {
  grid-template-rows: 1fr 16px;
  gap: 16px;

}

.member-list-item .name-role {
  display: none;
}

.member-list-item  .active  .name-role {
  display: block;
}

.member-image {
  width: 100px;
  height: 100px;
}

}

@media (min-width: 769px) and (max-width: 1024px){

.heading-section {
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  gap: 1em;
}

.team-list {
  gap: 10px;
  min-height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}

.member-list-item {
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}


.member-list-item button {
  grid-template-rows: 1fr 16px;
  gap: 16px;
}

.member-list-item .name-role {
  display: none;
}

.member-list-item  .active  .name-role {
  display: block;
}

.member-image {
  width: 100px;
  height: 100px;
}
}

@media (min-width: 1025px) and (max-width: 1280px){

.heading-section {
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  gap: 1em;
}

.team-list {
  gap: 10px;
  min-height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}

.member-list-item {
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-list-item button {
  grid-template-rows: 1fr 16px;
  gap: 16px;
}

.member-list-item .name-role {
  display: none;
}

.member-list-item  .active  .name-role {
  display: block;
}

.member-image {
  width: 100px;
  height: 100px;
}
}

@media (min-width: 1281px){

.heading-section {
  grid-template-columns: 1fr;
  padding-bottom: 48px;
  gap: 1em;
}

.team-list {
  gap: 10px;
  min-height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}

.member-list-item {
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-list-item button {
  grid-template-rows: 1fr 16px;
  gap: 16px;
}

.member-list-item .name-role {
  display: none;
}

.member-list-item  .active  .name-role {
  display: block;
}

.member-image {
  width: 100px;
  height: 100px;
}
}

</style>
