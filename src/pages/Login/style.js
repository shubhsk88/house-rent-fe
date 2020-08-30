import styled from 'styled-components';
import tw from 'twin.macro';

const StyledLogin = styled.div`
  height: 100vh;

  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.7)
    ),
    url('https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80')
      no-repeat;

  background-size: cover;
  ${tw`flex items-center justify-center`}
  .header-title {
    font-size: 2rem;
    ${tw` py-2 text-center`}
  }
  p {
    ${tw`text-center py-1`}
  }
`;

export default StyledLogin;
