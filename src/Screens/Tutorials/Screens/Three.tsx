import React from "react";
import ThreeB from "../Assets/threeB.png"; // Image showing human-wildlife conflict
import ThreeC from "../Assets/threeC.png"; // Image showing human-wildlife conflict
import Bottom from "../Bottom";
import Nav from "../../../Components/Nav/Nav";

const Three = () => {
  return (
    <div className="tutorialScreen">
      <Nav active="course" />

      <div className="container">
        <div className="header">Chapter 3</div>
        <div className="header">Human-Wildlife Conflict – A Key Issue in SDG 15</div>
        <div className="desc">
          Human-wildlife conflict (HWC) is a pressing issue globally and is especially important under Sustainable Development Goal 15 (Life on Land), which aims to protect,
          restore, and promote the sustainable use of terrestrial ecosystems and biodiversity. Human-wildlife conflict occurs when wildlife poses direct and recurring threats to
          human lives, livelihoods, or property, leading to negative consequences for both people and wildlife. This conflict is a complex, multifaceted issue that affects
          communities, conservation efforts, and wildlife survival across the globe.
        </div>
        <div className="desc">
          As human populations grow and expand into natural habitats, the frequency of these conflicts has increased. Wildlife that once thrived in vast, untouched ecosystems is
          now often forced to venture into human settlements as a result of habitat destruction, fragmentation, and competition for resources. These interactions can lead to crop
          destruction, livestock predation, property damage, and sometimes even loss of human life. For wildlife, these encounters can result in injury or death, often due to
          retaliatory killings by humans, and contribute to a decline in biodiversity.
        </div>

        <div className="subHeader">What is Human-Wildlife Conflict?</div>
        <div className="desc">
          Human-wildlife conflict occurs when wildlife causes damage to human property, livelihoods, or safety, and humans respond by taking actions that are detrimental to
          wildlife. It typically arises when humans and wildlife come into close proximity, often due to shrinking habitats, agricultural expansion, or climate-induced changes.
          Examples of human-wildlife conflict are widespread, including elephants trampling crops in Africa and Asia, wolves attacking livestock in Europe and North America, and
          monkeys raiding homes and farms in tropical regions. The challenge of mitigating these conflicts is critical for achieving SDG 15, which emphasizes coexistence between
          human populations and wildlife while ensuring biodiversity conservation.
        </div>

        <div className="subHeader">Examples of Human-Wildlife Conflict</div>
        <ul className="list">
          <li>
            <b>Elephants and Crops:</b> In many parts of Africa and Asia, elephants are known to raid crops. These majestic animals are highly intelligent but also have significant
            food requirements, which can lead them to wander into farmlands in search of sustenance. Their large size and strength allow them to destroy vast areas of crops in a
            short time, causing substantial economic losses for farmers. This issue is prevalent in countries such as Kenya, India, and Sri Lanka, where elephant habitats intersect
            with agricultural lands.
          </li>
          <li>
            <b>Wolves and Livestock:</b> In Europe and the Americas, large carnivores like wolves, mountain lions, and bears frequently prey on livestock. Livestock depredation can
            have severe economic consequences for rural communities, especially those that rely heavily on livestock for their livelihoods. While conservation programs aim to
            protect these predators, farmers often view them as a threat, leading to conflicts over the protection of livestock versus the conservation of predator species.
          </li>
          <li>
            <b>Monkeys and Farms:</b> In tropical regions like South Asia, monkeys often raid crops and homes in search of food. Their proximity to urban areas has increased due to
            habitat loss, forcing them to rely on human food sources. These raids can result in damaged crops, food stores being plundered, and even property destruction. In areas
            like India, where monkeys are often revered for religious reasons, the challenge of controlling their populations without harming them presents a unique dilemma.
          </li>
        </ul>

        <div className="subHeader">Causes of Human-Wildlife Conflict</div>
        <div className="desc">
          Human-wildlife conflict is primarily driven by the expansion of human populations and activities into areas that were once wildlife habitats. Several key factors
          contribute to the escalation of these conflicts:
        </div>
        <ul className="list">
          <li>
            <b>Habitat Fragmentation:</b> As forests and other natural habitats are cleared for agriculture, urbanization, and infrastructure development, wildlife is increasingly
            confined to smaller areas. This leads to higher densities of wildlife in limited spaces and increases the likelihood of contact with human settlements. Fragmented
            habitats also limit the natural movement of species, pushing them into areas where they may compete with humans for resources.
          </li>
          <li>
            <b>Resource Competition:</b> Wildlife and humans often compete for the same resources, such as food, water, and space. In regions where these resources are scarce, such
            as arid and semi-arid environments, competition becomes particularly intense. Animals may enter agricultural fields to feed on crops or livestock when natural food
            sources are depleted, leading to direct conflict with human activities.
          </li>
          <li>
            <b>Climate Change:</b> Climate-induced changes, such as droughts, floods, and shifting seasons, have a significant impact on wildlife behavior. Animals are forced to
            move beyond their traditional habitats in search of food, water, and shelter. For example, prolonged droughts in Africa have caused elephants and other large herbivores
            to encroach on farmland in search of water and food, increasing the risk of conflict.
          </li>
          <li>
            <b>Illegal Land Use:</b> Encroachment into protected areas or conservation zones by humans for activities such as illegal logging, mining, and agriculture is a growing
            issue. This leads to habitat loss for wildlife and brings humans into closer contact with species that may be displaced from their habitats. This illegal exploitation
            of land exacerbates conflicts and puts vulnerable species at greater risk.
          </li>
        </ul>

        <div className="images">
          <img src={ThreeB} alt="Human-Wildlife Conflict" width={500} height={500} />
          <img src={ThreeC} alt="Human-Wildlife Conflict" width={500} height={500} />
        </div>

        <div className="subHeader">Impacts of Human-Wildlife Conflict</div>
        <div className="desc">
          Human-wildlife conflict has significant impacts on both humans and wildlife. The economic, social, and ecological consequences of these conflicts can be devastating,
          particularly for communities living in rural or impoverished areas where agriculture and livestock are primary sources of income.
        </div>
        <ul className="list">
          <li>
            <b>On Humans:</b> Rural communities often bear the brunt of human-wildlife conflicts, facing economic losses due to crop destruction, livestock predation, and property
            damage. These losses can exacerbate poverty, reduce food security, and lead to social tensions. In some cases, human lives are lost in encounters with dangerous
            wildlife, particularly large carnivores like tigers or herbivores like elephants.
          </li>
          <li>
            <b>On Wildlife:</b> The impact on wildlife is equally severe. Many species face retaliatory killings by humans, leading to declining populations. For example, predator
            species like lions and tigers are often killed to protect livestock. Habitat loss due to human encroachment further exacerbates the decline of wildlife populations. In
            some regions, species have been driven to the brink of extinction due to these conflicts.
          </li>
        </ul>

        <div className="subHeader">Solutions to Human-Wildlife Conflict</div>
        <div className="desc">
          Addressing human-wildlife conflict requires a multifaceted approach that balances the needs of human communities with the protection of wildlife. Effective solutions
          involve a combination of community engagement, technological innovations, policy interventions, and conservation strategies. Here are some key solutions that have shown
          promise in mitigating conflict:
        </div>
        <ul className="list">
          <li>
            <b>Community-Based Conservation:</b> Involving local communities in wildlife conservation efforts is crucial for fostering coexistence. Programs that provide
            compensation for livestock or crop losses, promote sustainable land use, and offer economic benefits from conservation (such as ecotourism) help reduce hostility toward
            wildlife. When communities see tangible benefits from protecting wildlife, they are more likely to support conservation efforts.
          </li>
          <li>
            <b>Wildlife Corridors and Buffer Zones:</b> One of the most effective ways to reduce human-wildlife conflict is to create wildlife corridors that allow animals to move
            freely between habitats without encountering human settlements. Buffer zones around protected areas can also provide a transition space where humans and wildlife can
            coexist with fewer direct interactions. These zones help reduce the chance of wildlife venturing into agricultural or urban areas.
          </li>
          <li>
            <b>Technological Solutions:</b> Advances in technology offer innovative solutions to mitigate conflict. Electric fences, alarm systems, motion sensors, and drones can
            be used to deter wildlife from entering farmlands. In some regions, beehive fences have been implemented to prevent elephants from raiding crops, as elephants are
            naturally afraid of bees. Additionally, GPS tracking devices are being used to monitor the movements of large predators, allowing communities to take preventive
            measures when animals approach.
          </li>
        </ul>

        <div className="subHeader">Case Studies</div>
        <ul className="list">
          <li>
            <b>Kenya - Beehive Fences:</b> In Kenya, farmers have successfully used beehive fences to deter elephants from destroying crops. Elephants are known to have a natural
            aversion to bees, and the sound of buzzing bees is enough to keep them away from farmland. This low-cost, eco-friendly solution has helped reduce conflict between
            elephants and farmers in Kenya.
          </li>
          <li>
            <b>India - Relocation Near Tiger Reserves:</b> In India, communities that lived near tiger reserves have been relocated to reduce human-tiger conflicts. These
            relocation programs have not only improved human safety but also allowed for the restoration of tiger habitats. By moving human settlements away from critical wildlife
            areas, India has seen a reduction in tiger attacks and an increase in tiger populations.
          </li>
          <li>
            <b>Australia - Kangaroo Conservation:</b> In Australia, programs aimed at protecting kangaroos while mitigating damage to farmlands have involved community engagement
            and innovative land management practices. By involving local communities in kangaroo conservation, these programs have reduced crop damage and ensured the protection of
            kangaroo populations.
          </li>
        </ul>

        <div className="subHeader">Conclusion</div>
        <div className="desc">
          Human-wildlife conflict remains a significant challenge to achieving SDG 15. As human populations grow and encroach on natural habitats, finding sustainable solutions to
          these conflicts is essential for protecting both wildlife and human communities. By promoting community-based conservation, implementing wildlife corridors and buffer
          zones, and utilizing technological solutions, we can mitigate the impact of these conflicts and foster coexistence. Ensuring that human-wildlife conflict is addressed as
          part of broader conservation strategies is critical to safeguarding biodiversity and promoting sustainable development.
        </div>
        <div className="desc">
          <b>Note: Content of the course is written by using generative AI.</b>
        </div>
        <Bottom backText="Chapter 2" nextText="Chapter 4" back="/courses/two" next="/courses/four" />
      </div>
    </div>
  );
};

export default Three;
