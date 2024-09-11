<script>
  const images = [
    '/case-studies/case-1.jpg',
    '/case-studies/MoH.png',
    '/case-studies/case-3.jpg',
    '/case-studies/amref.jpg',
    '/case-studies/case-4.jpg'
  ];
</script>

<div id="our-team" class="inline-container">
  <div class="heading-section">
    <div>
      <div class="title">Case Studies</div>
    </div>
  </div>
  <div class="grid-gallery">
    {#each images as image, index}
      <div class="grid-item" key={index}>
        <a href='/resources/case-studies'>
          <img src={image} alt={'Case Study ' + (index + 1)} />
          <div class="overlay">
            <div class="overlay-text">Read Case Study</div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>


<style>
  #our-team {
  margin-top: 10%;
}

.heading-section {
  margin-top: 3em;
  display: flex;
}

.heading-section div h4 {
  color: var(--description-text);
}

.title {
  font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
  color: var(--text-color);
  margin-bottom: 14px;
  font-size: 2em;
  font-weight: 600;
}

.description {
  margin-left: 3em;
  margin-top: 3em;
}

.grid-gallery {
  width: 100%;
  padding: 50px 20px;
  display: grid;
  grid-gap: 16px;
  /* grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr)); */
}

.grid-gallery .grid-item {
  position: relative;
  background-color: #efefef;
  overflow: hidden;
  border-radius: 10px;
  /* border: 1px solid red; */
  /* max-height: 500px; */
}

.grid-gallery .grid-item img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.grid-gallery .grid-item:hover img {
  transform: scale(1.1);
}

.grid-gallery .grid-item a {
  cursor: pointer;
}

.grid-gallery .grid-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;
}

.grid-gallery .grid-item .overlay-text {
  color: white;
  font-size: 1.5em;
  text-align: center;
}

.grid-gallery .grid-item:hover .overlay {
  opacity: 1;
}

/* Stacked layout for smaller screens */
@media (max-width: 767px) {
  .grid-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  }

  .grid-gallery .grid-item {
    height: 250px;
    /* border: 1px solid red; */
  }

  .heading-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

/* Grid layout for larger screens */
@media (min-width: 1024px) {
  .grid-gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 170px 220px 170px;
  }

  .grid-gallery .grid-item {
    object-fit: cover;
    /* min-height: 200px; */
  }

  .grid-gallery .grid-item:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
    border-right: 4px solid rgb(140, 140, 140);
    border-bottom: 4px solid rgb(140, 140, 140);
    border-left: 1px solid rgb(140, 140, 140);
    border-top: 0.5px solid rgb(140, 140, 140);
  }

  .grid-gallery .grid-item:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 3 / span 1;
  }

  .grid-gallery .grid-item:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / span 2;
  }

  .grid-gallery .grid-item:nth-child(4) {
    border-left: 1px solid rgb(140, 140, 140);
    border-right: 4px solid rgb(140, 140, 140);
    border-top: 0.5px solid rgb(140, 140, 140);
    border-bottom: 4px solid rgb(140, 140, 140);
  }

  .grid-gallery .grid-item:nth-child(5) {
    grid-column: 3 / 4;
    grid-row: 1 / span 3;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.2em;
  }

  .grid-gallery .grid-item {
    height: 200px;
  }

  .grid-gallery .grid-item .overlay-text {
    font-size: 1em;
  }
}
</style>