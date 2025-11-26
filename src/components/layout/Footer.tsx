const Footer = () => {
    return (
        <footer className="border-top h-auto py-5">
            <div
                className="text-center"
            >
                <p style={{ fontWeight: 'bold' }}>Connect to us</p>
                <p
                    className="fa-brands fa-facebook"
                    style={{ padding: '0rem 0.5rem 0rem 0.5rem' }}
                />
                <p
                    className="fa-brands fa-x-twitter"
                    style={{ padding: '0rem 0.5rem 0rem 1rem' }}
                />
                <p
                    className="fa-brands fa-instagram"
                    style={{ padding: '0rem 0.5rem 0rem 1rem' }}
                />
            </div>
            <div className="text-center pt-1"
            >
                <p>
                    Copyright &copy; 2025 by Linkdev. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
