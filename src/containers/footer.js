import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Section 1</Footer.Title>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Section 2</Footer.Title>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Section 3</Footer.Title>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                    <Footer.Link href="#">Option</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Row> 
                <Footer.Column>
                    <Footer.Title>  &#169; Watcher 2021 </Footer.Title>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}