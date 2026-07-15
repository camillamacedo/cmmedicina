type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};


export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}