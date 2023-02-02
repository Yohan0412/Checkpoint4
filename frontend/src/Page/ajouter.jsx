import "./ajouter.css";

export default function Ajouter() {
  //   const [info, setInfo] = useState([]);

  //   useEffect(() => {
  //     instance
  //       .get(`/address/${id}`)
  //       .then((result) => {
  //         setInfo(result.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, [id]);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setInfo({ ...info, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .put(`${import.meta.env.VITE_BACKEND_URL}/address/${id}`, info, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         console.warn(res);
  //       })
  //       .catch((err) =>
  //         console.error(err, Notify.error("Mauvaises Informations! ❌"))
  //       );
  //     Notify.success("Vos informations ont été mises à jour!");
  //   };

  return (
    <section id="add">
      {/* <form>   onSubmit={handleSubmit}  */}
      <h1 className="yo">AJOUTER UNE PLANETES</h1>
      <form>
        <div className="esp">
          <label>
            Nom{" "}
            <input
              type="text"
              name="number_address"
              //   value={info.number_address}
              //   onChange={handleChange}
            />
          </label>
        </div>
        <div className="esp">
          <label>
            URL image{" "}
            <input
              type="text"
              name="number_address"
              //   value={info.number_address}
              //   onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <div className="esp">
            Distance{" "}
            <input
              type="number"
              name="complementary_info"
              // value={info.complementary_info}
              // onChange={handleChange}
            />
          </div>
        </label>

        <div className="esp">
          <label>
            Temps voyage{" "}
            <input
              type="number"
              name="zipcode"
              //   value={info.zipcode}
              //   onChange={handleChange}
            />
          </label>
        </div>
        <div className="esp">
          <label>
            Prix{" "}
            <input
              type="number"
              name="country"
              // value={info.country}
              // onChange={handleChange}
            />
          </label>
        </div>
        <button className="sub" type="submit">
          Enregistrer
        </button>
      </form>
    </section>
  );
}
