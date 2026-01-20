type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  // Add basePath prefix for GitHub Pages
  const imageSrc = picture.startsWith('/') && !picture.startsWith('/Health-AI_page') 
    ? `/Health-AI_page${picture}` 
    : picture;
    
  return (
    <div className="flex items-center">
      <img src={imageSrc} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
