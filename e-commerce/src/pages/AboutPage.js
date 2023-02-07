import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice-desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ea error reprehenderit voluptatem atque eaque? Atque quisquam officiis natus recusandae laudantium vel, vitae porro eveniet nam magnam nobis ducimus, voluptates accusamus? Error, laudantium accusantium nostrum aliquid, debitis cum maxime sunt natus consequatur obcaecati molestiae dolorum animi sit officia? Quam accusamus corrupti obcaecati impedit consequatur autem laborum voluptas aspernatur nobis minima numquam vero doloremque molestias totam libero tempora expedita dignissimos soluta, repellendus, tenetur voluptatem. Perferendis architecto quis laborum eum. Beatae consectetur fugiat qui corrupti, possimus, ratione ut recusandae enim magnam vitae nesciunt iusto consequuntur dolor aut alias quam sunt. Ratione, iusto.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
