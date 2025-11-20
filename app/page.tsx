import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function Page() {
  return (
    <div>
      <section className="hero">
        <h1>Design System</h1>
        <p>A tiny, clean set of components you can extend.</p>
        <div className="hero-actions">
          <Button variant="primary">Get Started</Button>
          <Button variant="ghost">Learn More</Button>
        </div>
      </section>

      <section id="components" className="section">
        <h2>Components</h2>
        <div className="grid">
          <Card title="Buttons" description="Primary, secondary, outline, and ghost variants.">
            <div className="stack">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Card>

          <Card title="Card" description="Flexible surface for content.">
            <p>
              Cards provide a contained surface with a title, description, and body area.
            </p>
            <p>
              They adapt to the current theme and respect spacing scale.
            </p>
          </Card>

          <Card id="theme" title="Theme" description="Toggle light and dark modes.">
            <p>Use the toggle in the header to switch themes.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
