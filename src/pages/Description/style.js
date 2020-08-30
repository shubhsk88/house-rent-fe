import styled from 'styled-components';
import tw from 'twin.macro';

const StyledDescription = styled.div`
  .image-container {
    margin-top: 4rem;

    background: no-repeat url(${props => props.image});
    background-size: cover;

    height: 20rem;
    ${tw`flex items-end justify-around `}
  }
  .host {
    margin-right: 6rem;
  }
  .pricing {
    margin-bottom: 1rem;
    color: white;
    font-font-weight: bold;
  }
  .host-title {
    ${tw`text-white font-bold`}
  }
  .favourite {
    ${tw`bg-orange-600 my-24 w-full text-lg text-center py-4 text-white font-bold`}
  }
`;

export default StyledDescription;
