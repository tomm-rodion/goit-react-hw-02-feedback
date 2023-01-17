import styled from 'styled-components';

export const Button = styled.button`
  margin: 5px;
  width: calc((100% - 30px) / 3);
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);

  :hover {
    background-color: ${props => (props.children === 'good' ? 'green' : 'red')};
  }
`;

//  background-color: ${props => {
//       console.log(props.children);
//       switch (props.children) {
//         case 'good':
//           return 'green';
//         case 'neutral':
//           return 'gray';
//         case 'bad':
//           return 'red';
//         default:
//           throw new Error();
//       }
//     }};

// console.log(props.children);
