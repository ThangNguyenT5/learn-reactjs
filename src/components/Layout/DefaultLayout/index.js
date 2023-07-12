import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="content">{children}</div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefaultLayout;
