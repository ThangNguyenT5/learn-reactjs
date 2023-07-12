import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className="content">{children}</div>
            </main>
        </div>
    );
}

export default HeaderOnly;
