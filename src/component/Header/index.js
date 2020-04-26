import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faExclamationCircle, faCloudDownloadAlt, faSortDown, faWrench, faFileAlt, faMale, faPuzzlePiece, faHistory, faTrashAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Img from '../Img';
import Menu from '../Menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.setTheme = this.setTheme.bind(this);
    this.state = {
      color: ''
    }
  }

  setTheme(event, className) {
    event.stopPropagation(); // dwugnf tất cả các event cũ

    this.setState({
      color: className
    });
  }
  render() {
    return (

      <div id="header">
        <div className="wrraper">
          <div>
            <a href="" className="logo">
              <Img link="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" />
            </a>
          </div>
          <div className="list-menu">
            <div className="list-menu-center">
              <a href="" alt="" className="topic" >
                <FontAwesomeIcon className="icon-header" icon={faPaintBrush} />
                Chủ đề
                <div className="topic-box">
                  <ul className="box-color">
                    {this.props.color.map(item => (
                      <li className={'color ' + item.className} onClick={event => this.setTheme(event, item.className)}></li>
                    ))}
                  </ul>
                </div>
              </a>

              <a href="" className="support">
                <FontAwesomeIcon className="icon-header" icon={faExclamationCircle} />
                Hỗ trợ</a>

              <a href="" className="dowload">
                <FontAwesomeIcon className="icon-header" icon={faCloudDownloadAlt} />
                Tải công cụ hỗ trợ

                  <ul>
                  <li>
                    <Img link="http://www.help.pacisoft.com/wp-content/uploads/2017/10/icon-teamviewer-300x300.png" >/</Img>
                    <a href="" className="text-link">TeamViewer</a>
                  </li>
                  <li>
                    <Img link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH7UEjc21uM0uLfTxPAan5k0S-XKuBoi-gh2bmv8-yVbHFmHKS&usqp=CAU" />
                    <a href="" className="text-link">UntraViewer</a>
                  </li>
                  <li>
                    <Img link="https://anydesk.com/_static/img/favicon/anydesk_icon.png" />
                    <a href="https://www.facebook.com" className="text-link">AnyDesk</a>
                  </li>
                  <li>
                    <Img link="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUQERIVFRUVFR4XFRcXFxgWFRcXGhYYGBcXFRkYHSggGBolGxYWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGjImICYtLS0tLS0vLS0tLS0vLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQQFBgcDAv/EAEsQAAEDAQQGBQUKDQQDAQAAAAEAAgMRBBIhMQUGQVFhcQcTIoGRFDJSodEWI0JUYnJzsbLBFyQzNFOCkpOjs8LS4RU1ovBDY/GD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADcRAAIBAgQCBwcEAgIDAAAAAAABAgMRBBIhMUFRBRMyYXGB8BQiUpGhsdEzQsHhIzRi8RUkQ//aAAwDAQACEQMRAD8A3EoCj6x68hhMVlo4g0MhFW1+QNvPLmstTEW0iYa2LtpD5lJtulZ5jWSV7uF40HIDALM5ye7MMqkpbsaXjvPio3IheO8pcBeO8pcBeO8pcBU7ylwF47ylwF47ylwF47ylwF47ylwF47ylwFTvKXAXjvKXAVO8pcBeO8pcXCp3lLgLx3lLgKneUuAvHeUuAvHeUuAvHeUuAvHeUuAvHeUuBxZdITRGscr2ng4jxG1dUpLZkozlHVMt+gNfHAhlrALf0jRiPnAZjl61op4h7SNlLGPafzNAjkDgHNIIIqCMQRvBWw9BO56QFH6Q9PFg8kjJBcKyEHG6cmd9MeHNZcRUt7qMOLrW9xeZnqxnnggBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgLn0faeLHiySEljz73U+a6lbo4Hdv5rTh6lnlZswlazyM0dbT0jEtM2szTySn4TzTgK0A8KLzJu8mzw6ks0mxkoEQQAgBAd7BCHyxsNaOe1ppnQuANPFSirtIlBXkkTGuWhY7JKyOIuIcy8bxBNbxGFAFZWpqDSRbiKSpySQ80DqxG6zutlrc5kdLzLpAJb6RqDWuFAPvUqdJOOaWxOlh04Oc3oMdWbJZJppBaHmOMNrGHPDSccnOG0CmHFRpRhJu5XRjTnJ59Fw1Ii2sY2R7Y3XmBxDHb21wKrla+hVJJN22OKicBATOrurr7ZfuSNZ1dK3gTWtcqHgradLPxLqNB1b2drETFdvNv1u3hepgbtRepxpVVq19Slb6lo1x1ajsscc0Je5rnXXXiDm0uaRQCgwI7wr61JQSaNWIoRppOJVFnMpbrJq1CLAbbMZL1wva1pAB/RjEHPDxWlUo9XmZrjQj1PWS5X/AxsdgsZsLpny0tIvUbe2hxDRc2gtoa8VGMYOnd7lcIU3SzSfva+rFfVBQCAEBM2nV17LI22mRpa672KG92nBoxrTarXSahnuWyotU+svpp9dCGVRUCAEAIAQHuGUscHtNC0gjmMQup2CdndGle7NnoO/4rf1yPS9rXIzN2Z5rAeaIuAEAIAQDvQ/5xD9Kz7YU4dpE6fbXijRtPavm122Jzx7zHF2/lG8aMHPbw5rZOnnmr7Ho1aHWVE3skVrX3TnWyeSx4Rwmjtl54w8G7P/ior1LvKuBmxVbNLItl9xhqjoNlslfHI57Q1l4Fl2tbwFDeacMVGjTU3ZlVCiqrabt4HrQ+rRtNplha+6yJxDnEAuoHFraDAVNEhSzSa4I7ToZ5uKeiJSbROiInGN9qlLgaEgkgEYEEsjujFWOFFaNlrp4aLs5evLQbae1UZFB5XZpjLFgTW6TdJpVrmgAgHZSqjUopRzRehGrhlGGeDuiwdHdngbC50cpdI9reubUUjIvUAoKjbmSrsOo5dGaMHGKjdPXj3FN1isVkiu+S2h0xcXXwS03aUpS60Z1OdclmqRguy7mKrCnHsSv8i36O/HtFGM4yMaW8b0Zqw94DfFaY/wCSlY2Q/wAuHs9/xsZ7YrOZnsjbnI4NFPlGlfDFYorM0kedGOdpLiXvpGtQihhsjMAcSNzIwA0eJH7JWvEStFRR6GMllioL0kQVj1djfo91tL5A9t+jRdudl5aK9muQ3qpUk6eczRoJ0XUu768raO3I76A1UZLB5VaZjFFiRS6DdBpec5wIArsou06Kcc0noTpYZShnm7Icw6J0RI4RstUgcTQEkgEnAAF8d04qWSi9EySp4aTspP146ETp7V7ySeON76xSEdvIhtQHVzFQDVV1KWSST2KqtDq5JN6PiXe2WKyHR7YnTuFnAZSWramjwW43aYmgyWlxh1dm9OZtlCm6OVy93TUzXSkMTJXNgeZIxS680JOArkAM67FimknZHmzUVK0XdDVRIggBACAChwdXirC0bOzPNQZWIuAEAIAQDvQ/5xD9Kz7YU4dpE6fbXijS9bNZxY3RMDalxvP4Rg0dT5R+5batXJY9KviOqaXqxXekPRgqy2xULJAA8jKtOw7kRh3DeqcRD9yM2Mp6qotn6Rz6MfziX6L+sLmG7TGC7b8CV1G/Orb9J/W9WUe1Itw36k/H8mfT+c75x+srG9zz3uy72D/Y3/8A6fz3LTD9B+f3NtP/AFH5/dh0YZWjkz+tdw3E7gv3eX8lFdmeaymAuHRppC7M+A5SNvN+c3Md7ST+qtGGlZ2NmCnaTjzHGrugbmk5cOxBV7N3vgoynABzvBSp07VX3HaNG1d8lr8/TIHXLSHX2uQg1aw9W39TB3/K8qa0s02UYieeo+7T15lh0X/sknKX+c5XR/QfmX0/9R+f3Y+sOjvKdExw9YI7wabzhUC7KHYiozu0z2qShnopFsafWYdRvbb7kPHqLQg+WxYEHzNx+kVaw/8Ay9fMpWDd+2vl/Z26TZWuMF1wOD8iD6O5SxL2JY13y+f8HTSn+yR8ov5rUl+gvI5U/wBReX3RQ1kMQIAQAgBABQ4OVYWDd2Z5qDICLgBACAEA70P+cQ/Ss+2FOHaROn214os3Sf8AnEX0X9ZV2J7SNON7a8B9qZaG2uySWCX4DaN33D5pbxa7+lTotTg4MnhpKpTdJ+l/Q26PbK6G2TxP85kd137Yx5EUPeo4dOM2mRwkXGpKL3Q51KtTG221xuIDnvN0Hbde+oHHFSotZ5InhpJVZr1xIi2aj2wSOutY5pcS1weBgThUHEHxVcsPO+hTLCVLuxN6SsvkWijZpXtMjqgAZFz5C+ja4kAHPgrHHq6OVl0o9Vh8knr+Xca9F8rb07CcSGkDaQLwP1jxXMM90RwTV5Ir+smr0ljcL7mua9zurIJvUFD2gRgaEZEqmpScGZq1GVN67cCP0ZbjZ5WTj4Dg402t+EPCqhGWV3IQnkkpcjXdMWplnhltYAr1YxHwsxGPF/rXozainI9epJQi5+u4xknfnt5rzDxi+aL/ANkk5S/znLXH9B+Ztp/6j8/uzvoyyi26J8mic2+2gIdkHNkDwHbQCBnxXYx6yjlROMetw+Rb/h3IGy6g2ovaHsja28LxLgcK40AFSabMFUsNK+pnjgZ31SOuv9ms0UkcVnjjY4AmQMa1udLodTbn4rteMItKKJYqNOMkoJLnYn7DYPLdFMgjeA6jRU5BzHh1HUxGXrV0Y56SSL4w63DqKfL6Mz/SNifBI6GSl5mBumoxAOBIGw7ljlFxdmYJwcHle42USIIAQAgAocHKsLBu7M81AgIuAEAIAQCgkYg0IyIwI5LoPUsrnYvc5x2Fzi491Sjbe4u3uxI5HNNWuc072ktPiETa2F3wPYtMlS4SSXjgXX3XiNgJrUhMz3uLvm/mzm41xOJrWpxNc613ocHbNK2gCgnlp9I72qWeXMsVSa/c/mNZZHPN57nOdvcS4+JxUW77kG23diNcQQQSCMiCQRyIxCA9yzvd573uplec51OVTgjbe4u3u/qc1wHR07yLpe8t9EvcW4ZdkmmC7d7C72v9TmuA6CZ4bcD3hvohzruOfZrRdu9hd7XPMUjmm8xzmu3tJafEYonbYLTVDp+lrQRQzy0+kd7VLPLmTdSb0zP5jNQKz3FM5tbj3Nrndc5tedDiuptbHU2tmI95cauJJ2kkknmTil7g8rgBACAEAFDg5VhaN3ZnmoFYi4AQAgBACAEAIAQAgBACAEAIAQAgBACAEBxntcbPPe1vMgFds2W06FWp2It+CPEWkIXGjZWE7rwr4JZkp4SvBXlB28ByuGcEOggBACAEAFDg5VhYN3ZnmoMgIuAEAIAQAgBACAldCavz2uvUhoa3NzyWtruFAST3KyFKU9iynRnU7J40poKezyNikaC5/mXCXNca0o0kDGpGBAzSVOUXZidGcGk1vyJC1ak2yOMykRkAVLWuJeBSuV0AngDyqpPDzSuWPC1Ur6evIrqpMwIdEe8AVJAAzJwCHYxcnZK7Im1awRtwYC878m+JxPgpKJ6dHomtNXm1H6v15kdLrBKfNDG9xcfrUsqN8OiKC7Tb+nr5jc6ZtH6X/iz+1LIvXRuFX7PrL8is01aB/wCSvNrfuASyOPozCv8Abbwb/J0k07M5t3sgn4TRQ04VJpzTKiEOisPGebV9z2Iw512nM7TzXT0dlYQhASeitLuiIa8lzNtcS3iOHD/p41c87G9HwrJygrS+/j+fmWtrgQCDUHEHgoNWPmWmnZirgBACAEAFDg5VhYN3ZnmoEBFwAgBACAEAIDvYbHJM8RxML3HID6ycgOJUoxcnZHYxcnaKNS0JDFo2ztjtE7GlzyakhovEZNrnQDNboJUo2kz1aajQglJkDrLrTA60WZ0R6xsEhe9wyNWltGnbQEmowrRVVKscytwM9bEQc4uOtn/Ra7JrDZJi1sc8Zc/zW1o7ldOIPArQqkHszXGvTlopIzXWbVyWyOLiL0Tj2XgYCp81w+CfUViq0nB34Hm1qEqbvwKzpC3thbV2JPmt2n/HFVJXO4bCzxE8sduL5FTt1tfMavOWTR5o5ceKsSsfT4fDU8PG0F4vi/XIboaAQCIBUAIAQAgBAWLVi1Va6I/Bxb801w7iD4pNaKR870tRUaqmuO/iTiqPKBACAEAFDg5VhYN3ZnmoEBFwAgBACAEBKaB0DNbH3YxRo86Qjst4fKdwHqVlOm5vQspUZVHZfMudrt9l0TH1MDRJOR2se1XY6UjIbm+FM1pcoUlZbm2U6eHWWOr9blB0hbpJ3mWVxc4+AG5o+COAWSUnJ3ZgnOU3eQ2USIIC26M17bFC+O3DrGBho40c526N4PnVyB8d61U6/wC2R6GEqyqyVKSvf1r+THNIWszSOkIu3jg0EkMbXBgJxIG/bmq3bgfRUaMKMFCC0OUcRdl4rly9RbHDbMNuKjcsUEdAwDYPBCVkeqIBC0bh4ILI8Ogbu8Eucyo5Psu4+K7cg6fI4OaRgV0g1YRDg90NIWvc4bAPWTh4BXKPuang9NT7KLdFIHAOGR/7RZWrOx4qdz2uHQQAgAocHKsLBu7M81AgIuAEAIAQFo1W1QfaaSzVZDs2Pk+b6LfleG9aKVBy1expoYZ1NZaL7knp/WyOBnktgAAaKGRtLrd4Z6TvlHDHap1Kyj7sC2riVFZKXz/BRXuJJcSSSaknEknMk7Ssu5hEXACAEBWtZbXeeIhkzF3ziMPAH1qcUfQdE4fLB1Xu9F4f2/sRkENcTl9a62e1GN9R2FwuBAC4AXQC4AQAugR7QcChxq4ymiu8lJMplGw40bLQlu/Ecx/hWwd1Y8PpnD5oKquG/gT2jbRdN05HLgVGpG6ufPRfAlVnLAQAgBDg5VhYN3ZnmoEBFwExonVm1WkX446MOT3m60/N2nnSnFWwpSlqi2nQqT1S0PVo1dMcghfabOJCaXbzyanIGjcDzXXSs7XRJ0LSyuSuWvV3UYRu6y1FryD2WDFnN1R2uWXPZfTw9neRqpYRJ3nqPtaNHW201iidHHDt7Tr7+DqDBvAf4U6kZy0WxZXp1J6RdkVj8H9q9OL9p39qz+zSMvsU+aD8H9q9OL9p39qezSHsU+aD8H9q9OL9p39qezSHsU+aD8H9q9OL9p39qezSHsU+aOFv1KnhikmkkiDI2Oe81caNa0uJ83cCjw8kdWBqN2TRkBcZHFxzcanhXFQ2PqqVNRioLZaD0DYFE0lo0NqRaJwHyUhYcrwq8jfdB7PfQ8FFySIua4E83o4gpjaJq8BGB4FpPrUc/cc6x8iP0j0eSNBMEwf8l4uE/rAkfUuqaCnzKjbrDLA65NG6N25wz5EYO7iVImmnsN0OgugFwAgEe2ooV041cYYtPEH6lZF2dzLVpqcXB8dCaa6oBG1XM+FnBwk4vgTdhtF9uOYwPtWWccrJxdxwoEgQAUODhWFhwdmeagyANpUVyrjy2oDcRTqveaeZ73TzfN7NOGS9Thoe7w0M91S0hY7LC60TkutQc4FrhWQGtKNrkTtdzruWSlKEVme55uGnTpwzS7X19cy46qaSltMJnlaGhzz1YHoCgGO3GuO1aKUnJXZtoVJVI5miZVhcCAEAIAQFO6W7d1WjJgM5bsXc9wDv+NVCo7RZdh43qIwCyNzPcsDPYpriapqZqmIQLRaGgzHFjSMIhT7fHZlvKqlLgjkpXLeoEAQAgONrskcrSyVjXtObXAOHgdvFE7HSoaY6Po3VdZpDGfQfVzDyPnN9fJTU+ZJTfEpWldCWizH36JwHpjtRn9YYDkaFTTuWJpkeh0F0AuAa2tuIO9SRVUXEe6PdVg4Ej7x6iFp3SZ8b0nTyYmXfqPrLNccHbNvJRlHMrGBOzJtpriMispaKuHQKHByrC0buzPNQKxFwExojWa1WYXI3gsGTHi80fNyI5VpwVsKso6Itp16kNE9B5La57QROdHxSE43xFIQ7nR1Hd6lmlLXKWOU5vNkT8iUZrHpNoDRZAABQAQvAA3DFWdZV+Et6+v8AD9D17ptKfFf4Un9ydbV+E719f4foHum0p8V/hSe1Otq8jnX1/h+ge6bSnxX+FJ/cnW1fhHX1/h+ge6bSnxX+FJ/cnW1fhO9fX+H6B7ptKfFf4Un9ydbV+EdfX+H6FL6UNOWuaGGK0xdWDKXt7DmF11hB844gXx4hRlUm9JI9Lo2dScpZ1ay/kb9Gmgutd5TIKsiPYHpSZ15NFO8jcs83Y9m9o2NPVREVABadyC4iAEAIAIrgcQcxsQFS1j0Do2tZXss0jsQQ8MrxLDgcdtBzVkcz2R3rcujZVp9TpSDJZZYrTHvY4B44EHDwPcu3tuTjViyv2qB8TrkrXMd6LgWk8q5jiFIsWuw1tY7PeiIT2Omizg4cf+/UtMeyj5TpqP8AlT7h8h4xI6LtHwDzb94VNWPEnF8CQVJYBQ4OVYWDd2Z5qBARcAIDUujm0X7Hd2xyOb9Tx6nhb8O7wPUwcr07cmWhXmozu09IMwmN2KMxBxFDe6wgGlb1aA8KLG8S822h50sbJS0Wn19eRfbFamyxslZ5r2hwrnQjbxWtO6ub4yUkmimaya7SwzuhgYykZo4vDiXGgJDaOFBjnis1Su4ysjFWxcozyxW3MtGr2lha4GzBt0kkObnRwNDjtG3vV9OeeNzXSqdZDMQmuOtj7I9sMLGl5aHuLwS0AkgAAEVPZO1VVqzg7Iz4nEum8sdys6eszdLss0tpDmGESCkZoH3zHjUglo97yzxzWWriHJJWPY6NUp0uslx/jiS2gNGR2aBsMVboJIvGp7TicT3qhyb1Zve5ILhwq+sWjbVbZuoZM6z2ZjR1j2flJXuxutNcGtAHe7bsthKMFe12VyTk7cBrq/0fssVpbaYrRI6gIe14b2rwIzbTaa4grs62ZWaEabTvcuSpLAQAgBAVXWzRGjXSstGkJA3siNjXyXGYEk0AoSe1jU0wCupyna0UVTyp3kw0fqhBZ5o7XYHFgNBIwOLopYjtFTg4YOBrTA4Y1R1W1lkMmqlEs88LZG3Hta5p2OAI8CqblpBS6pWRr+ubEARm3OM12ljqgEcKLud2JXb0ZXta9Awxxm0RMDHAgPDRRpbWlaZAgketX0Kjbys8jpfCdZS6yO8fsVJaD5UVriCCMxij1BOWeYPaHDv4FZZRs7Fydzoog7qZacXZnmolYi4AQF96Lp/y8fFr/UWn6mrXhXujfgX2l5l9Ws3mJaahuWiZm6V32iV5k1aTR4lRWm13moakS3rFDwBb4OIW6i/cR6mGd6SM911ju22biWu8WN9ix1177POxKtVfrgXPo1d+KOG6V32WlacN2Dbg/wBPzK10k/no+gZ9uVU4nt+Rlxn63kvuzroZ4MEdNjbp5jArHLc+m6OknhaduCt8tCbs57I/7tXDU9zounCP1ht5s9mlnBALGVBcKtBNGhzhtaCQTwCnTjmkkQqSyxbKZNL/AKdbLIWaWNuba3XZY3PDw0O82WMNcQxt40A7sdm+tRjk0Wxgo1pZ9WaIvNPSEQHmV92h4geOC4dPS6cM81n1k0fZbZaGaTsRtJdCzyc0a8BtHXmtDyOrJca324+Ar6OFtkPOxV85IdEdoc/R4qCGtleIwSTRl6oaCcwCSFmxSXWGnCt5C5rOaDzN5p5Lh1FK1/twZZuqHnzPaxo20BvPdyAHiQr8NG878jNjqihRdykLWfELYFwDmwWi46hyOfDcVCpG6JRdmTBWYsO6sLTi7M81ArEXACAtHR1aLtsufpI3DvFHD1By0Yd2nY04OVqluaNSW49UyHXeG5bpvlXXjvY0H1grz66tNnj4lWqy8n9P6Ln0azXrIW+hK5viGv8A61owzvA24J3p25N/kqnSEyltcd7Gn1EfcqMR2zLi1/l8kWXoxP4vIP8A2/0NV+G7JpwXYfiQPSWPxtv0DftyKnE9sz4z9XyX3Z61NsL5YJzGKvZI0hpNLwu9poOQOVK7cyM1CFHrIvmbuisQ6akntf8AgkNG24Oc+EtkZIzFzJGOYaHaCcHCu1pIVM6Uodo92NWFTsskFAmN9JWFlohkgkFWSMLHb6EUqOIz7l2MnF3RyUVJWZm+qfRY+y2wWiaZj44nXog29ecfgl4Io2meBOK11MSpRskZKeGcZXbNQWM2A5wGJNEOjG1TB5bGw17QJIyACidStqP1IiQWs2qVk0hcNoYS5nmua4tdQ5tOwjDaMNlKlWU6sobFdSlGe5IWKyR2aJkELAxjBRrRXAcziSTU1KhKTk7stp00lZbHQTFcLMqGWs+lPJrLJOAHEABoJoC5xDQD3lTpwzyUTPVn1cXLkZNaZpZpDPaH3n0oAMGMb6LB9+a3JRissdj5PG4+WIdlt6+gLh54IBEBL6PtF5tDm31jYs9SNncsi7ok1wuODszzUSAi4AQElq3P1drgfukA7nVYfU4qyk7TRZRdqkX3/wBG0L0j2jOOkuwOEzLQGm45gYXbAWkkA7sD6ljxMXfMebjYPMpEr0YROEEpIIa6WrScK9hgJG8YZ81PDJ5WW4FNQfj/AAiK6TLG4TMmum4WXS7YHAk0O7A+oqGJi7plWNi8ylwsS3RnA5sEjnAhrpKtrtAaASOFVZhk8pdgk1Bt8yJ6TrM4TRzXTcMdy9sDg5xod2Dgq8SndMpxsXmUuFiW6M7K9kEj3NIEkgLa4VAaBXlWqnhk1Fl2Ci1Ft8WNNeZ3wWuG0UPV9WWOOzzquHPI9yhiottEp1nQrxq8LWfhx/I+DwReGIpUclhPpItSs0NXOrmuF6VjrA7GiEJrid9ldm/YutNbld0IgABAKBsQHl7gHdWT2gLxbtAORd6NcaVzodyk4OO4TurrY5zMriFAnFnIMJ2ITuik9JlvBMFjaa49dLwDcIwebqn9XiteGjZOXkeN0rXyUmuZUVcfJggBACA9wylrg4bPq3LkldWOp2Jzy+PefAqrIzRdHt2Z5qoiIuAEAA7Rgdh3HegNa1X1ljtUbWuc1swHbYTQuIzcwHMHPDKuK9GlUU13nrUK6qLvJ9zQcCKq00ABTJADmg4EVQAAgBzQcCK80AoCARzQcCAeaAidNWTDrGjLzgN2/wBqx4ihf3omzD18vuyIIw7jgsJ6SmdIo6c0IylcjtJeUwE2iyOqf/LCReZJ8oN2PA3UJAG5WQqyjsdUadRZai8HxX9HjR+v9meKWizGN20sAe36g4cqHmrlVpPtRI1Oj60f0538dPyiQdrjo0CoDjwEbq+vBSzUOX0KlhMW/wDtELpDXySQ9TYbP1ZdgHkAvJPosAoOZJ5KLrpaQVjRDo5L3q0r93D5knoawdTHRzi+R5vyvJJLnnOpOJAyHJZm29xUnmemiWy7h8uFYw05peKyQunlODch8Jzjk1o2kn2qUIOcrIjOagrsx988k0j7RN+UldeI9BvwYxwaMF6DskorZHyGPxLrVO5CqJhBACAEAiAcLheTbszzWUCLgBACA5zxXhStDmCMwdhClF2dzg0GnLWzsC0zCmFOsd7VrUh19VaZmL7orZ8an/eO9qXY9oq/Ew90Vs+NT/vHe1Lse0VfiYe6K2fGp/3jval2PaKvxMPdFbPjU/7x3tS7HtFX4mHuitnxqf8AeO9qXY9oq/Ew90Vs+NT/ALx3tS7HtFX4mHuitnxqf9472pdj2ir8TJPV7W+SDsT3pI655vZvp6Q4Z7tyqqUlLVbnqYLpWVP3K2q58V+V9TQLBb4p234nh7eGY4EZg81klFxdmfRwqRnHNF3Q5XCREaS0BFKS9vYecyBgTvcN/ELtzRSxMoaboixqtJXGRlN9HV8P8pc0+2x5E3ozRMcGLe045uOdNw3BcbMlWvKpvsP0KSI1h1js9iZemdVx8yNuMjzua37zgrKdKVR6EKlWMFdmXaX0lNbZRNaOyG/kogatjG8+k/itsYxpq0fNnzOO6QdR5YbetvycVw8kEAiAVACAQoBwuF5NuzPNZQIuAEAIAQDHSdnqL4zGfLf3K6nLgQkuJFq4rBAKgBACAEAIAQHuzzPjdfjc5jh8JpoabjTMcDgu7qzLqOIqUXeDsWOw682qPCRsczd+McneRVrv2QqnQg9tD2aPTT/+kfkXLQenmWqPrAxzKOLS00OI4g5LNUhkdj2sNXhiIZ4bEj5S3j4KsvsR+ndOMssD5y1zrlOyKAkucGtHi4KdOGeWVEKklTg5MoOkddbdNUM6uzMPo1kl/aPZHcO9bI0acd9Tw63TC2h6+f4K9HAA4vJL3u857zee7mSrHK+h49fFVK3a2OyiZgQAgBAIgFQCIBwheTbszzWQCLgBACAEAICGttnuOwyOXsWqEsyKpKw3UiIiAVAIgFQAgBAPdFaJntTrkETnnbQdlvFzjg3vXVrsWU6U6jtFF5snRU8xky2kNlPmta28wbw4kgu7qU4qWTvN8ejvd1lqSdh1cfYohGRe2ue3EEnPkOaxVoTvdo+hwEKdKkqcXrx8T2s5vPM2izamOhulzXChIyG41yBBx7lZSU814oprZHBxm9GRtn6KXFjustQD/gBrKtHz6mprwpTivRyM+X/8ctfe8Cpaf1UtVjqZYyWfpGdpnec29644tGKrhqlPVrTmQiiZwQAgBACAEAiAcIXk27M81kAi4AQAgBACA5WiEPaWnuO4qUZZXc41chHNIJBzGa1J3KREAiAVACAEB0ji2lethOj8yz1duC/JRUq20RMaA1jfo5/XtBcynvkY+G3hXC8Nh+4lb8RhoOk1FWtsXYDEShWSvo9zcdGaQjtETJ4XB8cjbzSN3HcRkQvCas7M+oTuOlwGc6d1xszLU1rIRJGw0lcMLx/9YBoacc/WtdPoqNSGeSs+H9mGr0y6M+rTuuPd4F+sFojkjbJEQWOFWluVPuWVxcXlasbVNTWZO53XDpkevOuQtb32azu95ifde4ZSvGdPkA4cSK5UXrYCgks73PE6VxLVqUfMpckW5SxXR8ZrNT0f0Z5MKrWjOK8Fq2jNQLgBACAEAiAcIXk27M81kYEXACAEAIAQAgGOk7PUXxmM+W/uV1KXAhJcSMVxWCAEAID1E2pW7AUOtq3ey1/BXVllQ4X0ZjGemDSF3cPWFVW7DNGFV6qLB0R61GxufDIfeHvq75DiAL7eHZFR37MfLq0M8HJbo92nisk1CWzLbr7rnfvWWyu7OIlkHwthYw7s6nbkF3B4XM88tiHSGN6uOSG7M+XsHzpY9TtaH2GS6auhee2zaDlfZxyqNoCxYvCqqsy3PSwGNdKWSXZf0JrpS12b5M6CySV61gvyNrgx9Ow3c4gmu7LPLzaOHbvKXA9qviVFqMd2Zbq75jh8r7gvWw3ZZ4OP7a8CVWkwnKcZFeJ0nh7PrVx3NtGWaFuK+39HFeSTFQAgBAIgHNELyxaTsximkjObXkevA+CyyVpNEpxyyaY2USIIAQAgBACAEBC22z3HYZHL2LVCWZFUlY4KREEAIDtAMF7/AEZC1HNzf20MtZ+8dF6RSR+nT70eLh9dfuVGI7Brwa/y+TGmrzu08cAfA/5VWG3aNGOWkWTi1pJKyPOlJyd3uIukQQEbrA/3sDe4eoErNiLKNlzN2DblUu+COWrp7L+Y+pcw2zO4/tRJdajAeZW1B9XPYqMTT6ylKPcX4aSjUV9no/BjYFfKmqUXFtMVDgIAQCtYXENaKkmgG8nABdG5qX4PHemP2D7VbkPW9kfM7dI2hSHeVsHZIDZOBya7kcB3Des+Ip65kcxlLXOvMo6ymEEAIAQAgBACA5WmEPbdPcdxUoyyu5xq5COaQaHMZrVe5SIgBAP9DWV08rYRQVBJcdlBXLbU4Zr0aPSSoUlFxvYuw2AWKqZM1n4aWJHSWgJYGOlcWFjcSQchvNQFtw/StCtJQV03zJ4noPE0IOejS5b/ACsUnS2kRJ2GjAGtd5oRgN2KurVVLRFeFw7p+9LcYwzOYasJByw3d6pjJx1RqnCM1aSudv8AUZv0h9XsUuunzKvZqXwh/qM36Q+r2J10+Y9mpfD9w/1Gb9IfV7E66fMezUvh+5zntL30D3F1Mq0+5clOUt2ThShDsqw70PbBGS12Ttu48eCsoVFF2ZRi6LqK8d0WFbjyRUOp2GTN24keBI+5fKV45akl3nq1+3fmk/mj0qSkRAKgLp0Y6vG0WgWlw96gdX50lOy0cqhx7t6shG7ubMFRzzzPZfc2dXHsnmRgcC1wBBFCDiCDmCgauZ1rHqO9hMllBewmtyvabwbXzh6+axVMO1rE82thGtYFPlicw3XNLSMwRQ+tZ3puY2mtGeFw4CAEAIAQAgGGk7PUXxmM+W9XUpcCMlxIxXFYICd1LP40OLHfVX7lVX7B63Qr/wDa8mW/WSDrLJaGDMwvpzDSR6wFRh5ZasX3o+orxzU5LuZhgK+oPkgQAgBACAEAIDR+jCESRSuka1wa8MZUVp2akY82+K8zpLE1I5YRk1x0PW6LwlJqVSUU78xekKBoks7Gi6CyQm4SytDEBW7Suay4etUcZNyfDi+8dKqNCEZU4peS7iuRsDRQfWT9am23ufN1KrqSzSPVVwgemNLiGtBJOQGJPIBBvsXPVjo8tFoIfaA6CLPGnWO4Nb8HmfAqcYN7myjgpzd5aL6mwWGxxwxtiiaGsaKNaMh7TxVyVj14xUVZbHdCQIAQFS188xvzv6VTW2MeL2Rnjs1jMAiAEAIdEKARDgj8jyP1IjpX1oKgQEtqt+cs5O+wVVW7J6HRf+1Hwf2Llavyb/mO+yVlh2l4n1EtmYjHkOS+oe58uhUIiIAQAgPLl1HGKEJo0jo1/NpPpz/LjXi9JfqLw/lntdHfpPx/hCa6/lofo3/ajVNDsPxRm6Y7MSCVh4IBAaV0Zec/k36yr6Ztwm7NHVpvBACA/9k=" />
                    <a className="text-link">KiotViet chấm công vân tay</a>
                  </li>
                </ul>

              </a>
            </div>
            <div className="list-menu-end">
              <a href="" className="branch-center">
                Chi nhánh trung tâm
                <FontAwesomeIcon className="icon-header" icon={faSortDown} />
              </a>

              <a href="" className="setup" >Thiết lập
              <FontAwesomeIcon className="icon-header" icon={faSortDown} />
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faWrench} />
                    Thiết lập cửa hàng
                    </li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faFileAlt} />
                    Quản lý mẫu in</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faMale} />
                    Quản lý người dùng</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faPuzzlePiece} />
                    Quản lý chi nhánh nhắn</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faHistory} />
                    Lịch sử thao tác</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faTrashAlt} />
                    Xóa dữ liệu dùng thử</li>
                </ul>
              </a>

              <a href="" className="account" >0386639126
              <FontAwesomeIcon className="icon-header" icon={faSortDown} />
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faUser} />
                    Tài khoản</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faSignOutAlt} />
                    Đăng xuất</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
    {/* </div><Menu color={this.state.color} /></div> */ }
  }
}


export default Header;
