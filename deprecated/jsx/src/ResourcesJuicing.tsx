import * as React from 'react';
import {NavLink} from 'react-router-dom'
import {IResourcesProps} from "./Resources";
import './ResourcesJuicing.css';


export default class ResourcesJuicing extends React.Component<IResourcesProps, {}> {

    public render() {
        const pathname = this.props.pathname
        const isMain = pathname === '/resources'
        const isJuicing = pathname === '/resources/juicing'

        if (!isMain && !isJuicing) {
            return null
        }

        return <div className="c-resources-juicing">
            {/*<a name="juicing"/>*/}
            <div className="o-wrapper">
                <div className="c-resource-main">
                    <div>
                        <img src="/static/img/resources/juicing/main_opt.jpg" />
                    </div>
                    <div>
                        <h2>Why juice?</h2>
                        <p>Personally I love juicing and Smoothies. The benefits of juicing are the
                            keys to giving you a radiant, energetic life, and truly optimal health. Juicing is
                            an awesome way to get nutrients into your body as they are absorbed straight into
                            your bloodstream. It gives your body a direct shot of vitamins, minerals and
                            enzymes.
                        </p>
                        <blockquote>So what’s not to love? While eating a plant-based diet is linked to lower
                            risk of <a href="http://facts.randomhistory.com/heart-disease-facts.html" target="_newtab">heart disease</a>
                            and <a href="http://facts.randomhistory.com/cancer-facts.html" target="_newtab">cancer</a>,
                            there is no significant research linking the health benefits to juicing specifically.
                            <br/><cite>~ Patenaude, Frederic. 2002. The Raw Secrets: The Raw Vegan Diet in the Real World. Montreal, Canada: Raw Vegan</cite>
                        </blockquote>
                        <p>Nevertheless juicing is amazing and if you do it right, you are opening your body
                            up to a new world of awesome nutrients that you might otherwise have struggled to
                            get in your diet. It is one of the best ways you can flood your bloodstream with
                            a high dose of vitamins, minerals and antioxidants that will give you an
                            amazing boost of life. I have also found that a nutritious juice with fresh beet
                            will be no problem for my young son but eating that same raw beet provided a
                            challenge. </p>
                        {(isMain && !isJuicing)
                            ? <p>
                                <NavLink to="/resources/juicing">
                                    <button>+ expand</button>
                                </NavLink>
                            </p>
                            : null
                        }
                    </div>
                </div>
            </div>
            {this.renderMore(isJuicing)}
        </div>
    }

    private renderMore(isJuicing: boolean) {
        if (!isJuicing) {
            return null
        }

        return <div>
            <div className="flex-parent">

                <div className="exp-main">

                    <div className="benefits">
                        <h3>Here are some great benefits of juicing</h3>
                        <img src="/static/img/resources/juicing/benefits_opt.jpg" />
                        <dl>
                            <dt>Get your daily serving of fruits and veggies with juicing</dt>
                            <dd>The majority of us definitely do not get our recommended 6-8 servings of fruits and vegetables a day. Through juicing, you can easily get your daily intake of fruits and veggies without feeling super full.</dd>
                            <dd>Juicing extracts the insoluble fiber from the produce leaving just the amazing nutrients for your body to absorb! Plus, juicing is a great way to incorporate a wide variety of fruits and veggies into your diet rather than sticking to the same boring salad everyday.</dd>

                            <dt>Absorb nutrients better with less digestion.</dt>
                            <dd>Are you aware that 95% of the vitamins and enzymes your body needs are originated in the extract of raw fruits and vegetables? Many of us have compromised digestion due to the poor food choices we’ve made over the years. This limits our ability to absorb all of the nutrients from the vegetables we eat.</dd>
                            <dd>Juicing is a great way to get a bunch of nutrients delivered straight to your cells, super-fast, while giving your digestive system a break. Since the vegetables have been "pre-digested" through juicing, your body can absorb virtually all of the nutrients. Important micronutrients, such as digestive enzymes and certain phytonutrients, which are typically difficult to absorb, become accessible.</dd>

                            <dt>Strengthen your immune system.</dt>
                            <dd>Juicing provides a powerful boost to your immune system. Fresh green juice gives your body a mega dose of nutrients, meaning your immune system is instantly strengthened. Through juicing, you will have more energy, fight off colds and flu faster, and you’ll notice that your skin will have a fabulous, healthy glow.</dd>
                        </dl>
                    </div>

                    <div className="mixing">
                        <h3>Mixing Fruit and Veg</h3>
                        <img src="/static/img/resources/juicing/mixing_opt.jpg" />
                        <p>Before I knew about correct food combining I happily mixed my fruit and veggies in juices. But now I am a bit more cautious. The reason for this is because fruit and vegetables contains different digestive enzymes, and if eaten together (or combined incorrectly) could cause digestive disturbances. The whole idea behind juicing is to give your body the nutrients it needs without adding unnecessary strain on the digestive system. (To learn more about correct food combining click here.)</p>
                        <p>Some juicers promote using no fruits or using lemons and limes which have virtually none of the offending sugar or fructose that causes most of the metabolic complications. These are also amazing at eliminating the bitter taste of the dark, deep green leafy vegetables that provide most of the benefits of juicing. Personally I struggle with celery. Taste preference is such a subjective individual experience, one person might love their juice with celery and another might not be able to get it down-like me. The leaves of celery are often bitter, so it is recommended to remove them before juicing. Still the stalk creates a taste I cannot stand, so I often adapt recipes for my taste preferences. Therefore I will leave it up to you to decide what makes your juice tasty.</p>
                        <p>If you are new to juicing or need your toddler to get some nutritious juice down, I would suggest adding those apples for added sweetness and to make it more palpable. If you follow the rest of my eating and lifestyle plan those added fruits ought not to cause any digestive problems or weight gain issues. But if you are suffering from obesity, diabetes or Candida  it would be wise to use fruits in moderation. Physicians recommend talking with a health care provider before incorporating juice into a diet to avoid potential food and drug interactions. For example, large amounts of foods high in vitamin K (e.g., spinach and kale) may interact with some anti-blood-clotting medicine. Please feel free to contact me for more information or advice. Keep in mind I am giving a general juicing guideline here but as we are all different and our health status differs, tailor made suggestions or solutions might be needed for your specific condition or situation.</p>
                    </div>

                    <div className="video">
                        <h3>Video</h3>
                        <p>To get all psyched up about the benefits of juicing watch this documentary:</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/V-WUP5psyuM" frameBorder="0" allowFullScreen={true}/>
                        <p>&nbsp;</p>
                    </div>

                    <div className="tips">
                        <h3>Juicing Tips</h3>
                        <img src="/static/img/resources/juicing/tips_opt.jpg" />
                        <ol>
                            <li>Use Organic and pesticide free veggies</li>
                                <p>We know that commercially-grown fruits and vegetables are sprayed with pesticides and other chemicals. This is not something that we can avoid, as not all of us are blessed with easy access to organic or pesticide-free produce. If you can afford it though, organic is always the best choice.</p>
                                <p>One way I’ve found to remove these toxins from fruits and vegetables is to soak them in clean water with a mixture of white vinegar and some sea salt. But this only remove the pesticides from the surface, not within the fibers. Vegetables tend to catch more of the pesticides. When preparing them, tear (not cut) them up from their bunch and soak them in this solution. Soak it for about 10-20 minutes and you will start to notice the water smell. This means the pesticide has come off. Rinse the vegetables a couple more times and it’s ready for juicing. Do the same thing for fruits and brush with a soft fruit brush. (Watch the video here.)</p>
                                <p>Secondly, peeling and even juicing has been shown to help remove pesticide residue.   So for extra care, always wash your hands and produce well, then peel items like citrus, beets, melon before juicing.</p>

                            <li>If you would like to make your juice taste a bit more palatable, especially in the beginning, you can add these elements:</li>
                                <dl>
                                    <dt>Lemons and Limes:</dt>
                                    <dd>You can also add one half to a whole lime or lemon for every quart of juice. You can actually juice the skin if you want to avoid the hassle of peeling them</dd>
                                    <dt>Cranberries:</dt>
                                    <dd>You can also add some cranberries if you enjoy them. Researchers have discovered that cranberries have five times the antioxidant content of broccoli, which means they may protect against cancer, stroke and heart disease. In addition, they are chock-full of phytonutrients, and can help women avoid urinary tract infections. Limit the cranberries to about 4 ounces per pint of juice.</dd>
                                    <dt>Fresh ginger:</dt>
                                    <dd>This is an excellent addition if you enjoy the taste. It gives your juice a little "kick"! And, as an added boon, researchers have found that ginger can have dramatic effects on cardiovascular health, including preventing atherosclerosis, lowering cholesterol levels, and preventing the oxidation of low density lipoprotein (LDL).</dd>
                                </dl>

                            <li>Drink your vegetable juice right away, or store it very carefully.</li>
                                <p>Juicing is a time-consuming process, so you'll probably be thinking to yourself, "I wonder if I can juice first thing in the morning, and then drink it later?" This is not a good idea. Vegetable juice is HIGHLY perishable so it's best to drink all of your juice immediately. However, if you're careful, you can store it for up to 24 hours with only moderate nutritional decline. This is really helpful if you are bringing your juice to work with you so you can consume it during the day. How to store your juice:</p>
                                <ul>
                                    <li>Put your juice in a glass jar with an airtight lid and fill it to the very top. There should be a minimum amount of air in the jar as the oxygen in air will "oxidize" and damage the juice. You can suck out the air to vacuum pack it. This will remove most of the oxygen that will damage the juice.</li>
                                    <li>Immediately store it in the fridge and consume it when you are ready. It is best to drink it as soon as possible and in any case within 24 hours of juicing.</li>
                                </ul>

                            <li>Remember to clean your juicer immediately or soak in warm soapy water  until you can. It will save you lots of tears and trouble later.</li>
                                <p>Ready to give juicing a whirl?</p>
                        </ol>
                    </div>

                </div>

                <div className="exp-side">

                    <div className="recipe">
                        <h3>Glowing Green Juice Recipe</h3>
                        <img src="/static/img/resources/juicing/recipe_opt.jpg" />
                        <h4>Ingredients<br/><small>(When possible, opt for organic produce)</small></h4>
                        <ul>
                            <li>1 cup spinach</li>
                            <li>1 cup <a href="http://www.mindbodygreen.com/tag/kale.html" target="_newtab">kale</a></li>
                            <li>1 cucumber</li>
                            <li>3 sticks of celery (These I replace with kiwi fruit because of my celery intolerance)</li>
                            <li>1 apple</li>
                            <li>&frac12; lemon</li>
                            <li>1 inch piece of ginger</li>
                        </ul>
                        <p>Add spinach and kale to juicer and follow it with cucumber, celery and apple. Add the lemon and ginger. Enjoy this fabulous, revitalizing refreshment!</p>
                        <p><em>Note: Drink immediately. If needed, store in a glass container with an air-tight lid for up to 24 hours.</em></p>
                    </div>

                    <div className="fibre">
                        <h3>What about Fiber?</h3>
                        <img src="/static/img/resources/juicing/fiber_opt.jpg" />
                        <p><strong>It is important to understand a glass of juice is not supposed to replace
                            a healthy regular balanced meal.</strong> In core, juicing is extracting the
                            liquid part from complete fruits and vegetables. When you juice, you don’t get
                            the fiber that’s in whole fruits and vegetables. Juicing machines extract the
                            juice and leave behind the pulp, which has fiber. Some with the motivation for
                            weight loss might become so enthusiastic about this fact that they replace meals
                            with juicing. Remember juicing can be a wonderful addition to a healthy
                            lifestyle and seen as a supplement. In certain cases juicing might be used in
                            short-term weight loss or cleansing programs. Cruciferous vegetables like
                            broccoli, cabbage, kale, cauliflower, radish, Brussels sprouts contain
                            phytonutrients known to help promote an increase in liver enzymes credited with
                            detoxification.</p>
                        <blockquote>In a Department of Agriculture study, researchers analyzed 12
                            fruits and found that 90% of the antioxidant activity was in the juice rather than
                            the fiber.
                            <br/><cite>~ Ref Rose, Natalia. 2007. Raw Food Life Force: Enter a Totally New Stratosphere of Weight Loss, Beauty, and Health. New York, NY: Harper.</cite>
                        </blockquote>
                        <p>But if you don’t want to miss out on the fiber, you can add some of
                            the pulp back into the juice or use it in cooking. Use the roughage in baking,
                            soups, muffin batter, veggie burgers, healthy cookies, stews, crackers and much
                            more. If you don’t choose to use the pulp for cooking then at least use it
                            for compost.
                        </p>
                    </div>

                    <div className="timing">
                        <h3>When to Juice</h3>
                        <img src="/static/img/resources/juicing/timing_opt.jpg" />
                        <p>Most people juice in the morning, but if that does not work out well for your
                            schedule, please feel free to choose whatever time works best for your lifestyle.
                            Raw food nutritionists <strong>recommend chewing raw juice</strong>. Yes you heard
                            me, chewing juice.</p>
                        <blockquote>When drinking juice, chewing activates the digestive elements in the
                            mouth, which helps assimilate the juice in the body.
                            <br/><cite>~ Baird, Lori, ed. 2004. The Complete Book of Raw Food. New York, NY: Healthy Living Books.</cite>
                        </blockquote>
                        <p><strong>Fresh juice should only be consumed on an empty stomach.</strong> The whole
                            point of drinking juice is diminished if you don't, and can end up giving you
                            digestive issues. Drinking juice on an empty stomach allows the vitamins and
                            minerals in the juice to go straight to your bloodstream. Having fiber or a meal
                            already in your stomach prevents your body from quickly absorbing the nutrients
                            from the juice. <strong>A good general rule of thumb to follow is to wait at least
                            2 hours after a meal to drink a green juice and wait an hour after drinking a green
                            juice to consume a meal.</strong> Think about it. Drinking any liquid will dilute
                            your digestive juices and slow the digestive process. That is when certain foods
                            start to ferment and cause gas as well as other digestive disturbances. This is why
                            this rule is so important and makes perfect sense. <strong>I recommend diluting
                                juice for
                            toddlers and small kids with water. The fruit acids can damage your enamel.
                            Therefore after drinking fruit juices, rinse your mouth. Do not brush so as to
                            prevent corrosion of your teeth enamel from the fruit acid.</strong>
                        </p>
                    </div>

                    <div className="machine">
                        <h3>The Machine</h3>
                        <img src="/static/img/resources/juicing/machine_opt.png" />
                        <p>There are two basic juicers available on the market: centrifugal juice extractors and cold press
                            juicers (a.k.a. masticating juicers). Specialists suggest buying a centrifugal juicer if you
                        </p>
                        <ol className="lower-alpha">
                            <li>want to use the juice mostly for cooking, baking, or other processes where the juice will eventually be exposed to heat,</li>
                            <li>don&apos;t mind if it is less efficient at extracting all the nutrients, and</li>
                            <li>are trying to save cash.</li>
                        </ol>
                        <p>A cold press juicer is more helpful if you</p>
                        <ol className="lower-alpha">
                            <li>are interested in cleansing, making nut milks and green juices, and fresher juices,</li>
                            <li>want to pack as many nutrients into your body as possible, and</li>
                            <li>can afford a more expensive juicer.</li>
                        </ol>
                        <p>One of the more important factors when you choose a juicer, is that it must be easy to assemble, dismantle and clean.</p>
                    </div>

                </div>

            </div>

            <p className="collapse">
                <NavLink to="/resources#juicing">
                    <button>&minus; collapse</button>
                </NavLink>
            </p>
        </div>
    }
}
