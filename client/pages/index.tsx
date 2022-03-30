import MainLayouts from "../layouts/MainLayouts";

const Index = () => {
    return (
        <MainLayouts>
            <div className="center">
                <h1>Welcome!</h1>
                <h3>Here are the best tracks</h3>
            </div>

            <style jsx>
                {`
                  .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  }
                `}
            </style>
        </MainLayouts>
    )
}

export default Index