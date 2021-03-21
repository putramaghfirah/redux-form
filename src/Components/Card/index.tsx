import styled from 'styled-components';

export function Card({
  cardHeight,
  cardWidth,
  children,
}: {
  cardHeight?: string;
  cardWidth?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container width={cardWidth} height={cardHeight}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ width?: string; height?: string }>`
  width: ${(p) => p.width};
  padding: 20px;
  height: ${(p) => p.height};
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    outline-style: none;
    outline: none;
    border: none;
  } */
`;
