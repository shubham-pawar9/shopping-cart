const Section = ({ setSelectCategory, handleSelectCategory }) => {
  return (
    <>
      <div className="sectionDiv">
        <ul>
          <li
            id="sofas"
            className="active"
            onClick={(e) => handleSelectCategory(e)}
          >
            Sofas
          </li>
          <li id="beds" onClick={(e) => handleSelectCategory(e)}>
            Bed
          </li>
          <li id="wardrobe" onClick={(e) => handleSelectCategory(e)}>
            Wardrobes
          </li>
          <li
            id="diningtable"
            className="disabled"
            onClick={(e) => handleSelectCategory(e)}
          >
            Dining Tables
          </li>
          <li
            id="chairs"
            className="disabled"
            onClick={(e) => handleSelectCategory(e)}
          >
            Chairs
          </li>
          <li
            id="tvunit"
            className="disabled"
            onClick={(e) => handleSelectCategory(e)}
          >
            TV Unit
          </li>
          <li
            id="shoerack"
            className="disabled"
            onClick={(e) => handleSelectCategory(e)}
          >
            Shoe Rack
          </li>
        </ul>
      </div>
    </>
  );
};
export default Section;
