const Section = ({ setSelectCategory, handleSelectCategory }) => {
  return (
    <>
      <div className="sectionDiv">
        <ul>
          <li
            id="sofas"
            className="active"
            onClick={(e) => handleSelectCategory(e.target.id)}
          >
            Sofas
          </li>
          <li id="beds" onClick={(e) => handleSelectCategory(e.target.id)}>
            Bed
          </li>
          <li id="wardrobe" onClick={(e) => handleSelectCategory(e.target.id)}>
            Wardrobes
          </li>
          <li
            id="diningtable"
            onClick={(e) => handleSelectCategory(e.target.id)}
          >
            Dining Tables
          </li>
          <li
            id="chairs"
            className="disabled"
            onClick={(e) => handleSelectCategory(e.target.id)}
          >
            Chairs
          </li>
          <li
            id="tvunit"
            className="disabled"
            onClick={(e) => handleSelectCategory(e.target.id)}
          >
            TV Unit
          </li>
          <li
            id="shoerack"
            className="disabled"
            onClick={(e) => handleSelectCategory(e.target.id)}
          >
            Shoe Rack
          </li>
        </ul>
      </div>
    </>
  );
};
export default Section;
