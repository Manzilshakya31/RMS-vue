import styled from "styled-components";

export const ContentWrapper = styled.div`
  transition: all 0.2s ease-in;
  padding: 0 20px;
  background-color: transparent;
  @media (min-width: 1280px) {
    padding: 0 120px;
  }
  @media (min-width: 768px) {
    padding: 0 60px;
  }
  > div,
  > section,
  > nav {
    max-width: 1280px;
    margin: 0 auto;
  }
  &.nav-is-scrolling {
    background: white;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
      drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    > nav {
      transition: all 0.2s ease-in;
      padding: 24px 0 !important;
    }
  }
  &.dropdown-open {
    background: white;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 30px 0;
  background-position: top;
  background-size: cover;
  border-radius: 20px;
  background-image: url("/images/design-bg.png");
  @media (min-width: 768px) {
    background-image: url("/images/design-bg.png");
    padding: 30px 0;
  }
  @media (min-width: 1536px) {
    background-image: url("/images/design-bg.png");
  }
`;
