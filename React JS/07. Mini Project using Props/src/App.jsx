import Card from "./components/Card";

// =========================== App.jsx ============================
const App = () => {
    // Array of 10 Objects
    const jobOpenings = [
        {
            brandLogo:
                "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
            name: "Google",
            datePosted: "2 days ago",
            post: "Frontend Software Engineer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$68/hr",
            location: "Bengaluru, India",
        },
        {
            brandLogo: "https://cdn-icons-png.flaticon.com/256/0/747.png",
            name: "Apple",
            datePosted: "5 days ago",
            post: "iOS Software Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$75/hr",
            location: "Hyderabad, India",
        },
        {
            brandLogo:
                "https://cdn-icons-png.magnific.com/256/6033/6033716.png?semt=ais_white_label",
            name: "Meta",
            datePosted: "1 week ago",
            post: "React Frontend Developer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$82/hr",
            location: "London, UK",
        },
        {
            brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG18.png",
            name: "Amazon",
            datePosted: "3 days ago",
            post: "Software Development Engineer I",
            tag1: "Full Time",
            tag2: "Entry Level",
            pay: "$58/hr",
            location: "Chennai, India",
        },
        {
            brandLogo: "https://cdn-icons-png.flaticon.com/256/732/732221.png",
            name: "Microsoft",
            datePosted: "2 weeks ago",
            post: "Full Stack Developer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$70/hr",
            location: "Noida, India",
        },
        {
            brandLogo: "https://cdn-icons-png.flaticon.com/256/732/732228.png",
            name: "Netflix",
            datePosted: "10 days ago",
            post: "Backend Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$95/hr",
            location: "Los Angeles, USA",
        },
        {
            brandLogo:
                "https://cdn.iconscout.com/icon/free/png-256/free-nvidia-logo-icon-svg-download-png-3030185.png",
            name: "NVIDIA",
            datePosted: "4 weeks ago",
            post: "AI Software Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$88/hr",
            location: "Pune, India",
        },
        {
            brandLogo: "https://cdn-icons-png.flaticon.com/256/888/888835.png",
            name: "Adobe",
            datePosted: "6 days ago",
            post: "React Developer",
            tag1: "Contract",
            tag2: "Junior Level",
            pay: "$64/hr",
            location: "Noida, India",
        },
        {
            brandLogo:
                "https://cdn.iconscout.com/icon/free/png-256/free-intel-logo-icon-svg-download-png-3030074.png?f=webp&w=128",
            name: "Intel",
            datePosted: "8 weeks ago",
            post: "Cloud Engineer",
            tag1: "Full Time",
            tag2: "Mid Level",
            pay: "$61/hr",
            location: "Bengaluru, India",
        },
        {
            brandLogo:
                "https://img.logo.dev/openai.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
            name: "OpenAI",
            datePosted: "12 days ago",
            post: "AI Infrastructure Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$120/hr",
            location: "San Francisco, USA",
        },
    ];

    return (
        <div className="parent">
            {jobOpenings.map(function (currentValue, index) {
                return (
                    <div key={index}>
                        <Card
                            brandLogo={currentValue.brandLogo}
                            companyName={currentValue.name}
                            datePosted={currentValue.datePosted}
                            post={currentValue.post}
                            tag_1={currentValue.tag1}
                            tag_2={currentValue.tag2}
                            salary={currentValue.pay}
                            jobLocation={currentValue.location}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
