
interface BackgroundProps {
    imageUrl: string;
    className?: string;
  }
  
  export const BackgroundImage = ({ imageUrl, className }: BackgroundProps) => {
    return (
      <div
        className={`w-full h-screen bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Conteúdo opcional */}
      </div>
    );
  };