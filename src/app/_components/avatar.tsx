type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  // Add basePath prefix for GitHub Pages (uses env variable)
  const basePath = process.env.BASE_PATH || '';
  const imageSrc = picture.startsWith('/') && basePath && !picture.startsWith(basePath) 
    ? `${basePath}${picture}` 
    : picture;
    
  return (
    <div className="flex items-center">
      <img src={imageSrc} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
