import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 border-b">
      <h2 className="text-4xl font-bold">Knowledge Cafe</h2>

      <img className="w-12 h-12 rounded-full" src={profile} alt="Profile" />
    </div>
  );
};

export default Header;
