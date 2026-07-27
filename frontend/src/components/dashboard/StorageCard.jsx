import "./StorageCard.css";

function StorageCard() {

  const usedStorage = 1.8;
  const totalStorage = 10;

  const percentage =
    (usedStorage / totalStorage) * 100;

  return (

    <section className="storage-card">

      <div className="storage-header">

        <h2>Storage Usage</h2>

        <span>{percentage.toFixed(0)}%</span>

      </div>

      <div className="storage-progress">

        <div
          className="storage-fill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p>

        <strong>{usedStorage} GB</strong>

        {" "}of{" "}

        <strong>{totalStorage} GB</strong>

        {" "}used

      </p>

      <button className="upgrade-btn">

        Upgrade Storage

      </button>

    </section>

  );

}

export default StorageCard;