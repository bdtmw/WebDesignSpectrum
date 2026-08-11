import PackageCard from "@/components/Cards/PackageCard";

const PackageGrid = ({
  packages,
  activeTab,
  onViewDetails,
  onBuyNow,
  onLiveChat,
}) => {
  if (!packages.length) {
    return (
      <div
        className="tab-pane fade show active"
        id={`${activeTab}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
      >
        <div className="package-empty text-center">
          <h3>Packages Coming Soon</h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="tab-pane fade show active"
      id={`${activeTab}-panel`}
      role="tabpanel"
      aria-labelledby={`${activeTab}-tab`}
    >
      <div className="package-carousel">
        {packages.map((packageItem) => (
          <PackageCard
            key={packageItem.id}
            packageItem={packageItem}
            onViewDetails={onViewDetails}
            onBuyNow={onBuyNow}
            onLiveChat={onLiveChat}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageGrid;