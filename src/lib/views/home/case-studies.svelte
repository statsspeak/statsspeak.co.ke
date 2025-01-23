<script>
import Carousel from "svelte-carousel";

const images = [
	"/case-studies/case-1.jpg",
	"/case-studies/MoH.png",
	"/case-studies/case-3.jpg",
	"/case-studies/amref.jpg",
	"/case-studies/case-4.jpg",
];
</script>


  <div id="our-team" class="inline-container">
  <div class="heading-section">
    <div>
      <div class="title">Case Studies</div>
      <h4>Our case studies are more than just success stories...</h4>
    </div>
    <div class="description">
      <p>They are a testament to our ability to tackle complex challenges, leverage data-driven
        insight, crafts and innovation
      </p>
    </div>
  </div>
  <div class="grid-gallery">
    {#each images as image, index}
      <div class="grid-item" key={index}>
        <a href="/resources/case-studies">
          <img src={image} alt={'Case Study ' + (index + 1)} />
          <div class="overlay">
            <div class="overlay-text">Read Case Study</div>
          </div>
        </a>
      </div>
    {/each}
  </div>
  {#if Carousel}
    <!-- Display carousel on small screens -->
     <div class="grid-carousel">
      <Carousel
        autoplay
        itemsToShow={1}
        loop={true}
        navigation={true}
        pagination={true}
        infinite={true}
        auto={false}
      >
        {#each images as image, index}
          <div class="grid-item" key={index}>
            <a href="/resources/case-studies">
              <img src={image} alt={'Case Study ' + (index + 1)} />
              <div class="overlay">
                <div class="overlay-text">Read Case Study</div>
              </div>
            </a>
          </div>
        {/each}
      </Carousel>
    </div>
  {/if}
  </div>

  <style>

  #our-team {
    margin-top: 10%;
  }

  .heading-section {
  margin-top: 3em;
  display: flex;
  /* border: 1px solid red; */
  /* padding-bottom: 112px; */
  }

  .heading-section div h4{
    color: var(--description-text)
  }

  .title {
  font-family: var(--font-family-secondary), "Source Sans 3", sans-serif;
  color: var(--secondary-500);
  margin-bottom: 14px;
  font-size: 2em;
  font-weight: 600;
  /* margin-top: .5em; */
  }

  .description {
  margin-left: 3em;
  margin-top: 3em;
  }

  .grid-gallery {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create three equal columns */
  grid-template-rows: 150px 200px 150px; /* Different row heights to simulate "half row" */
  grid-gap: 16px;
  }

  .grid-gallery .grid-item {
  position: relative;
  background-color: #efefef;
  overflow: hidden;
  border-radius: 10px;
  }

  .grid-gallery .grid-item img {
  width: 100%;
  height: 100%;
  object-fit: fill; /* Ensure the image fills the grid item */
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .grid-gallery .grid-item:hover img {
  transform: scale(1.1);
  }

  .grid-gallery .grid-item a {
  cursor: zoom-in;
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

  /* First item spans two rows */
  .grid-gallery .grid-item:nth-child(1) {
  grid-column: 1 / 2; /* Occupies the first column */
  grid-row: 1 / span 2; /* Spans from the first to the third row (occupies three rows) */
  border-right: 4px solid rgb(140, 140, 140); /* 2px solid border on the right */
  border-bottom:4px solid rgb(140, 140, 140); /* 2px solid border on the bottom */
  border-left: 1px solid rgb(140, 140, 140);
  border-top: .5px solid rgb(140, 140, 140)
  }

  /* .grid-gallery .grid-item:nth-child(1):hover {
    border: none;
  } */

  /* Second item */
  .grid-gallery .grid-item:nth-child(2) {
  grid-column: 1 / 2; /* Occupies the second column */
  grid-row: 3 / span 1; /* Spans the first row only */
  }

  /* Third item spans two rows */
  .grid-gallery .grid-item:nth-child(3) {
  grid-column: 2 / 3; /* Occupies the second column */
  grid-row: 2 / span 2; /* Spans the second and third rows */
  }

  .grid-gallery .grid-item:nth-child(4) {
    /* grid-column: 3 / 4;
    grid-row: 1 / span 2; */
    border-left: 1px solid rgb(140, 140, 140);
    border-right: 4px solid rgb(140, 140, 140);
    border-top: .5px solid rgb(140, 140, 140);
    border-bottom: 4px solid rgb(140, 140, 140);
    }

    .grid-gallery .grid-item:nth-child(4) img {
      object-fit: cover;
    }

    /* .grid-gallery .grid-item:nth-child(4):hover {
      border: none;
    } */

    .grid-gallery .grid-item:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 1 / span 3;
  }

  .grid-carousel {
  display: none;
  }

  /* Media Queries */
  @media (max-width: 1200px) {
  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: block;
    margin-top: 2em;
  }

  .grid-carousel .grid-item {
    max-height: 300px;
    padding: .5em;
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
  }
  }

  @media (max-width: 768px) {
  .heading-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .description {
    margin-left: 0;
    margin-top: 1em;
  }

  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: block;
    margin-top: 2em;
  }

  .grid-carousel .grid-item {
    max-height: 300px;
    padding: .5em;
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
  }
  }

  @media (max-width: 480px) {
  .title {
    font-size: 1.2em;
  }

  .description {
    font-size: 1em;
  }

  .grid-gallery {
    display: none;
  }

  .grid-carousel {
    display: block;
    margin-top: 2em;
  }

  .grid-carousel .grid-item {
    max-height: 300px;
    padding: .5em;
  }

  .grid-carousel .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
  }

  .grid-gallery .grid-item .overlay-text {
    font-size: 1em;
  }
  }

  </style>
