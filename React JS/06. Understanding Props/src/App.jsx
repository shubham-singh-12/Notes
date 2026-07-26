import Card from "./components/Card";

// =========================== App.jsx ============================
const App = () => {
    return (
        <div>
            <div className="parent">
                <Card
                    user="Shubham"
                    image="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    user="Shourya"
                    image="https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </div>
    );
};

export default App;
