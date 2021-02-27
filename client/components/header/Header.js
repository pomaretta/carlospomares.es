import Style from 'styled-components';

const HeaderStyle = Style.header`
    width: 100%;
    height: 75px;
    background: var(--main-bg);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = Style.div`
    max-width: 100%;
    height: 100%;
    aspect-ratio: 100 / 29;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkStyle = Style.a`
    font-weight: 700;
    font-size: 1.5em;
    color: var(--heading-color);
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: 26px;
`;

const Column = Style.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Burger = Style.div``;

const Navigation = Style.ul`
    display: flex;
`;

const Header = (props) => 
<HeaderStyle>
    <Container>
        <Column>
            <LinkStyle>
                Pomares
            </LinkStyle>
        </Column>
        <Column>
            <nav>
                <Navigation>

                </Navigation>
            </nav>
        </Column>
    </Container>
</HeaderStyle>

export default Header;